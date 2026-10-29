const { chromium } = require('playwright');
const assert = require('assert/strict');
const path = require('path');
const URL = 'file://' + path.resolve(process.argv[2]);
const SHOTS = process.argv[3];
let passed = 0; const ok = (name) => { passed++; console.log('  ✓ ' + name); };

(async () => {
  const browser = await chromium.launch();
  const errors = [];
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, locale: 'ko-KR', timezoneId: 'Asia/Seoul' });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/fonts|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  await page.clock.setFixedTime(new Date('2026-10-30T10:00:00+09:00'));
  await page.goto(URL + '#/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  // 1. 첫 화면
  assert.equal(await page.locator('#calcTitle').textContent(), '나의 마운자로 다이어리');
  assert.equal(await page.title(), '마운자로 다이어리 | 투여 일정 및 정보 관리');
  assert.equal(await page.textContent('.brand b'), '마운자로 다이어리');
  assert.match(await page.textContent('footer.site'), /마운자로 다이어리[\s\S]*공식 서비스가 아니며/);
  assert.equal(await page.textContent('.copy'), '나의 투여 일정부터 마운자로 정보까지');
  assert.ok(await page.locator('#startBtn').isVisible());
  assert.equal(await page.getAttribute('a[data-route="home"]', 'aria-current'), 'page');
  assert.equal(await page.inputValue('#interval'), '7');
  assert.match(await page.textContent('#todayLabel'), /2026년 10월 30일 \(금\)/);
  ok('home shows calculator first, empty state, default interval 7');
  await page.click('#startBtn');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'lastDate');
  ok('start button focuses date input');
  await page.screenshot({ path: SHOTS + '/desktop-empty.png', fullPage: false });

  // 2. 잘못된 입력
  await page.fill('#lastDate', '2026-10-31');
  await page.click('#calcForm button[type=submit]');
  assert.match(await page.textContent('#lastDateErr'), /오늘 이후/);
  assert.equal(await page.getAttribute('#lastDate', 'aria-invalid'), 'true');
  await page.fill('#lastDate', '2026-10-28');
  await page.fill('#interval', '0');
  await page.click('#calcForm button[type=submit]');
  assert.match(await page.textContent('#intervalErr'), /1~28/);
  await page.fill('#interval', '');
  await page.click('#calcForm button[type=submit]');
  assert.match(await page.textContent('#intervalErr'), /입력/);
  assert.ok(await page.locator('#startBtn').isVisible(), 'nothing saved on invalid input');
  ok('future date / bad interval are rejected with messages');

  // 3. 계산
  await page.fill('#interval', '7');
  await page.selectOption('#dose', '2.5');
  await page.click('#calcForm button[type=submit]');
  assert.equal(await page.textContent('#resultDate'), '11월 4일');
  assert.equal(await page.textContent('#resultStatus'), 'D-5');
  assert.equal(await page.locator('.upcoming li').count(), 4);
  assert.match(await page.locator('.upcoming li').first().textContent(), /11월 11일 \(수\)/);
  assert.equal(await page.locator('#recList li').count(), 1);
  assert.ok(await page.locator('#recList .badge').isVisible());
  ok('10/28 + 7 days → 11월 4일, D-5, 4 upcoming dates, record saved');
  assert.equal(await page.textContent('#calMonth'), '2026년 11월');
  assert.match(await page.getAttribute('.day.is-next', 'aria-label'), /11월 4일/);
  assert.equal(await page.locator('.day.is-plan').count(), 3); // 11/11, 18, 25 (12/2 다음 달)
  await page.click('#calPrev');
  assert.match(await page.getAttribute('.day.is-dose', 'aria-label'), /10월 28일/);
  assert.match(await page.getAttribute('.day.is-today', 'aria-label'), /10월 30일.*오늘/);
  ok('calendar marks next/plan/dose/today and navigates months');
  await page.screenshot({ path: SHOTS + '/desktop-result.png', fullPage: true });

  // 4. 기록 추가 (달력 클릭) · 중복
  await page.locator('.day', { hasText: /^29$/ }).click();
  assert.equal(await page.inputValue('#recDate'), '2026-10-29');
  await page.selectOption('#recDose', '5');
  await page.click('#recForm button[type=submit]');
  assert.equal(await page.textContent('#resultDate'), '11월 5일');
  assert.equal(await page.textContent('#resultStatus'), 'D-6');
  assert.equal(await page.locator('#recList li').count(), 2);
  await page.fill('#recDate', '2026-10-29');
  await page.click('#recForm button[type=submit]');
  assert.match(await page.textContent('#recErr'), /이미/);
  await page.fill('#recDate', '2026-11-01');
  await page.click('#recForm button[type=submit]');
  assert.match(await page.textContent('#recErr'), /오늘 이후/);
  ok('adding a newer record recalculates; duplicate and future dates blocked');
  // 미래 날짜 달력 클릭
  await page.click('#calNext');
  await page.locator('.day', { hasText: /^20$/ }).click();
  assert.match(await page.textContent('#toastMsg'), /오늘 이후/);
  ok('clicking a future calendar day does not create a record');

  // 5. 수정
  await page.locator('#recList li').first().getByRole('button', { name: /수정/ }).click();
  assert.ok(await page.locator('#editDialog').isVisible());
  await page.fill('#editDate', '2026-10-31');
  await page.click('#editSave');
  assert.match(await page.textContent('#editErr'), /오늘 이후/);
  await page.fill('#editDate', '2026-10-28');
  await page.click('#editSave');
  assert.match(await page.textContent('#editErr'), /이미/);
  await page.fill('#editDate', '2026-10-30');
  await page.click('#editSave');
  assert.ok(!(await page.locator('#editDialog').isVisible()));
  assert.equal(await page.textContent('#resultDate'), '11월 6일');
  assert.equal(await page.textContent('#resultStatus'), 'D-7');
  assert.match(await page.locator('#recList li').first().textContent(), /수정 1회/);
  const other = await page.evaluate(() => JSON.parse(localStorage.getItem('mounjaroDiary.v1')).records.find(r => r.date === '2026-10-28'));
  assert.equal(other.history.length, 0);
  ok('edit validates, recalculates, keeps history, leaves other records untouched');

  // 6. 삭제 · 되돌리기 · 복원
  await page.locator('#recList li').first().getByRole('button', { name: /삭제/ }).click();
  assert.equal(await page.textContent('#resultDate'), '11월 4일');
  assert.ok(await page.locator('#deletedBox').isVisible());
  await page.click('#toastAction');
  assert.equal(await page.textContent('#resultDate'), '11월 6일');
  assert.ok(!(await page.locator('#deletedBox').isVisible()));
  await page.locator('#recList li').first().getByRole('button', { name: /삭제/ }).click();
  await page.click('#deletedSummary');
  await page.locator('#deletedList li').first().getByRole('button', { name: /복원/ }).click();
  assert.equal(await page.textContent('#resultDate'), '11월 6일');
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem('mounjaroDiary.v1')).records.length);
  assert.equal(stored, 2);
  ok('delete recalculates, undo works, restore from deleted list works');

  // 7. 새로고침 유지
  await page.fill('#interval', '10');
  await page.click('#calcForm button[type=submit]');
  assert.equal(await page.textContent('#resultDate'), '11월 9일');
  await page.reload();
  assert.equal(await page.inputValue('#interval'), '10');
  assert.equal(await page.inputValue('#lastDate'), '2026-10-30');
  assert.equal(await page.textContent('#resultDate'), '11월 9일');
  assert.equal(await page.locator('#recList li').count(), 2);
  ok('settings and records survive reload; interval change recalculates');

  // 8. 오늘 예정 / 예정일 지남
  await page.clock.setFixedTime(new Date('2026-11-09T08:00:00+09:00'));
  await page.reload();
  assert.equal(await page.textContent('#resultStatus'), '오늘 예정');
  await page.clock.setFixedTime(new Date('2026-11-12T08:00:00+09:00'));
  await page.reload();
  assert.equal(await page.textContent('#resultStatus'), '예정일 지남');
  assert.match(await page.textContent('.r-note'), /3일이 지났어요/);
  ok('today → 오늘 예정, past → 예정일 지남 (no new dosing instructions generated)');
  await page.clock.setFixedTime(new Date('2026-10-30T10:00:00+09:00'));

  // 9. 메뉴 이동
  const routes = { calculator: '투여 일정 계산기', about: '마운자로 소개', usage: '사용법', 'side-effects': '부작용', precautions: '주의사항', price: '가격 정보', faq: '자주 묻는 질문', home: null };
  for (const [r, h1] of Object.entries(routes)) {
    await page.click(`nav.main a[data-route="${r}"]`);
    assert.equal(await page.getAttribute(`a[data-route="${r}"]`, 'aria-current'), 'page', r);
    assert.equal(await page.locator('nav.main a[aria-current="page"]').count(), 1);
    const calcVisible = await page.locator('#calculator').isVisible();
    assert.equal(calcVisible, r === 'home' || r === 'calculator', r + ' calculator visibility');
    if (h1) {
      const visibleH1 = r === 'calculator' ? await page.textContent('#calcTitle') : await page.locator(`.view[data-view="${r}"] h1`).textContent();
      if (r !== 'calculator') assert.equal(visibleH1, h1);
    }
  }
  await page.goto(URL + '#/nope');
  assert.equal(await page.getAttribute('a[data-route="home"]', 'aria-current'), 'page');
  assert.equal(await page.title(), '마운자로 다이어리 | 투여 일정 및 정보 관리');
  await page.click('nav.main a[data-route="usage"]');
  assert.equal(await page.title(), '사용법 | 마운자로 다이어리');
  ok('all 8 menu items route correctly, one current item, unknown hash → home, tab titles branded');
  // 이전 이름의 저장 데이터 이어받기
  await page.evaluate(() => { localStorage.clear(); localStorage.setItem('mounjaroGuide.v1', JSON.stringify({ settings: { dose: '5', interval: 7 }, records: [{ id: 'old1', date: '2026-10-27', dose: '5', note: '', history: [] }] })); });
  await page.goto(URL + '#/'); await page.reload();
  assert.equal(await page.textContent('#resultDate'), '11월 3일');
  assert.equal(await page.evaluate(() => localStorage.getItem('mounjaroGuide.v1')), null);
  assert.ok(await page.evaluate(() => localStorage.getItem('mounjaroDiary.v1')));
  ok('records saved under the old name are carried over');
  for (const r of ['usage', 'side-effects', 'price']) {
    await page.goto(URL + '#/' + r);
    await page.screenshot({ path: `${SHOTS}/desktop-${r}.png`, fullPage: true });
  }

  // 10. 깨진 저장 데이터
  await page.evaluate(() => localStorage.setItem('mounjaroDiary.v1', '{broken json'));
  await page.goto(URL + '#/');
  await page.reload();
  assert.ok(await page.locator('#startBtn').isVisible());
  ok('corrupted storage falls back to empty state without crashing');

  // 11. 모바일
  const m = await browser.newContext({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: 'ko-KR', timezoneId: 'Asia/Seoul' });
  const mp = await m.newPage();
  mp.on('pageerror', e => errors.push('mobile: ' + e.message));
  await mp.clock.setFixedTime(new Date('2026-10-30T10:00:00+09:00'));
  await mp.goto(URL + '#/');
  assert.ok(await mp.locator('#menuBtn').isVisible());
  assert.ok(!(await mp.locator('#mainNav').isVisible()));
  await mp.screenshot({ path: SHOTS + '/mobile-empty.png' });
  await mp.fill('#lastDate', '2026-10-28');
  await mp.tap('#calcForm button[type=submit]');
  assert.equal(await mp.textContent('#resultDate'), '11월 4일');
  await mp.screenshot({ path: SHOTS + '/mobile-result.png', fullPage: true });
  await mp.tap('#menuBtn');
  assert.ok(await mp.locator('#mainNav').isVisible());
  assert.equal(await mp.getAttribute('#menuBtn', 'aria-expanded'), 'true');
  await mp.screenshot({ path: SHOTS + '/mobile-menu.png' });
  await mp.tap('nav.main a[data-route="side-effects"]');
  assert.ok(!(await mp.locator('#mainNav').isVisible()), 'menu closes after navigation');
  assert.equal(await mp.getAttribute('a[data-route="side-effects"]', 'aria-current'), 'page');
  for (const r of ['', 'calculator', 'about', 'usage', 'side-effects', 'precautions', 'price', 'faq']) {
    await mp.goto(URL + '#/' + r);
    const over = await mp.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert.ok(over <= 0, `no horizontal scroll on #/${r} (overflow ${over}px)`);
  }
  await mp.goto(URL + '#/side-effects');
  await mp.screenshot({ path: SHOTS + '/mobile-side-effects.png', fullPage: true });
  await mp.tap('#menuBtn'); await mp.keyboard.press('Escape');
  assert.ok(!(await mp.locator('#mainNav').isVisible()));
  ok('mobile: hamburger opens/closes, navigation works, no horizontal scroll on any page');

  assert.deepEqual(errors, [], 'no page errors');
  ok('no JavaScript errors');
  await browser.close();
  console.log(`UI: ${passed} checks passed`);
})().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
