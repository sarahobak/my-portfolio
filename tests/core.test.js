const fs = require('fs'), vm = require('vm'), assert = require('assert/strict');
const html = fs.readFileSync(process.argv[2], 'utf8');
const src = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
const ctx = {}; vm.createContext(ctx); vm.runInContext(src + ';this.MJ=MJ;', ctx);
const MJ = ctx.MJ;
let n = 0; const t = (name, fn) => { fn(); n++; };

t('spec example 10/28 + 7 = 11/04', () => assert.equal(MJ.addDays('2026-10-28', 7), '2026-11-04'));
t('month end', () => { assert.equal(MJ.addDays('2026-01-31', 1), '2026-02-01'); assert.equal(MJ.addDays('2026-04-30', 7), '2026-05-07'); });
t('year end', () => assert.equal(MJ.addDays('2026-12-28', 7), '2027-01-04'));
t('leap year 2028', () => { assert.equal(MJ.addDays('2028-02-26', 7), '2028-03-04'); assert.equal(MJ.addDays('2028-02-28', 1), '2028-02-29'); });
t('non-leap 2026/2100', () => { assert.equal(MJ.addDays('2026-02-28', 1), '2026-03-01'); assert.equal(MJ.parse('2100-02-29'), null); assert.ok(MJ.parse('2000-02-29')); });
t('DST spans (US/EU March, Nov)', () => { assert.equal(MJ.addDays('2026-03-05', 7), '2026-03-12'); assert.equal(MJ.addDays('2026-10-29', 7), '2026-11-05'); assert.equal(MJ.diffDays('2026-03-01', '2026-04-01'), 31); });
t('invalid dates rejected', () => { for (const s of ['2026-02-30', '2026-13-01', '2026-00-10', '26-10-28', '', null, '2026-1-5']) assert.equal(MJ.parse(s), null, String(s)); });
t('diffDays calendar based', () => { assert.equal(MJ.diffDays('2026-10-28', '2026-11-04'), 7); assert.equal(MJ.diffDays('2026-11-04', '2026-10-28'), -7); });
t('weekday', () => { assert.equal(MJ.weekday('2026-10-28'), '수'); assert.equal(MJ.weekday('2026-11-04'), '수'); assert.equal(MJ.weekday('2028-02-29'), '화'); });
t('todayISO uses local date parts', () => { assert.equal(MJ.todayISO(new Date(2026, 9, 28, 23, 59)), '2026-10-28'); assert.equal(MJ.todayISO(new Date(2026, 9, 29, 0, 0)), '2026-10-29'); });
t('status labels', () => { assert.equal(MJ.statusOf(0).label, '오늘 예정'); assert.equal(MJ.statusOf(3).label, 'D-3'); assert.equal(MJ.statusOf(-1).label, '예정일 지남'); });

const rec = (id, date, extra = {}) => ({ id, date, dose: '5', note: '', updatedAt: '2026-01-01T00:00:00Z', history: [], ...extra });
t('schedule from latest valid record', () => {
  const rs = [rec('a', '2026-10-14'), rec('b', '2026-10-28'), rec('c', '2026-10-21')];
  const s = MJ.computeSchedule(rs, 7, '2026-10-30');
  assert.equal(s.base.id, 'b'); assert.equal(s.next, '2026-11-04'); assert.equal(s.daysLeft, 5); assert.equal(s.status.label, 'D-5');
  assert.deepEqual([...s.upcoming], ['2026-11-11', '2026-11-18', '2026-11-25', '2026-12-02']);
});
t('deleted and future records ignored', () => {
  const rs = [rec('a', '2026-10-21'), rec('b', '2026-10-28', { deletedAt: 'x' }), rec('c', '2026-11-30')];
  const s = MJ.computeSchedule(rs, 7, '2026-10-29');
  assert.equal(s.base.id, 'a'); assert.equal(s.next, '2026-10-28'); assert.equal(s.status.label, '예정일 지남');
});
t('today due', () => assert.equal(MJ.computeSchedule([rec('a', '2026-10-21')], 7, '2026-10-28').status.label, '오늘 예정'));
t('custom interval', () => assert.equal(MJ.computeSchedule([rec('a', '2026-10-28')], 10, '2026-10-28').next, '2026-11-07'));
t('no records -> null', () => { assert.equal(MJ.computeSchedule([], 7, '2026-10-28'), null); assert.equal(MJ.computeSchedule([rec('a', '2026-10-28', { deletedAt: 'x' })], 7, '2026-10-28'), null); });
t('bad interval -> null', () => assert.equal(MJ.computeSchedule([rec('a', '2026-10-28')], 0, '2026-10-28'), null));

t('validation', () => {
  const T = '2026-10-28';
  assert.equal(MJ.validateDoseDate('2026-10-28', T), null);
  assert.match(MJ.validateDoseDate('2026-10-29', T), /오늘 이후/);
  assert.match(MJ.validateDoseDate('', T), /입력/);
  assert.match(MJ.validateDoseDate('2026-02-30', T), /올바른/);
  assert.match(MJ.validateDoseDate('1999-12-31', T), /확인/);
  for (const v of ['7', 7, '1', '28']) assert.equal(MJ.validateInterval(v), null, String(v));
  for (const v of ['', '0', '29', '7.5', '-1', 'abc', ' ']) assert.ok(MJ.validateInterval(v), JSON.stringify(v));
});

t('add / duplicate / future', () => {
  let s = MJ.emptyState(); const T = '2026-10-28';
  let r = MJ.addRecord(s, { date: '2026-10-21', dose: '2.5' }, T); assert.ok(!r.error); s = r.state;
  assert.equal(s.records.length, 1);
  assert.match(MJ.addRecord(s, { date: '2026-10-21', dose: '5' }, T).error, /이미/);
  assert.match(MJ.addRecord(s, { date: '2026-10-29', dose: '5' }, T).error, /오늘 이후/);
  assert.match(MJ.addRecord(s, { date: '2026-10-20', dose: '3' }, T).error, /용량/);
});
t('update keeps history and does not touch others', () => {
  const T = '2026-10-28'; let s = MJ.emptyState();
  s = MJ.addRecord(s, { date: '2026-10-14', dose: '2.5' }, T).state;
  s = MJ.addRecord(s, { date: '2026-10-21', dose: '2.5' }, T).state;
  const [a, b] = s.records; const snapA = JSON.stringify(a);
  const r = MJ.updateRecord(s, b.id, { date: '2026-10-22', dose: '5', note: 'x' }, T, '2026-10-28T01:00:00Z');
  assert.ok(!r.error); s = r.state;
  assert.equal(JSON.stringify(s.records[0]), snapA);
  assert.equal(s.records[1].date, '2026-10-22'); assert.equal(s.records[1].history.length, 1); assert.equal(s.records[1].history[0].date, '2026-10-21');
  assert.equal(MJ.computeSchedule(s.records, 7, T).next, '2026-10-29');
  assert.match(MJ.updateRecord(s, b.id, { date: '2026-10-14', dose: '5' }, T).error, /이미/);
  assert.match(MJ.updateRecord(s, b.id, { date: '2026-11-01', dose: '5' }, T).error, /오늘 이후/);
  assert.ok(!MJ.updateRecord(s, b.id, { date: '2026-10-22', dose: '7.5' }, T).error, 'same date allowed for self');
});
t('soft delete, recompute, restore', () => {
  const T = '2026-10-28'; let s = MJ.emptyState();
  s = MJ.addRecord(s, { date: '2026-10-14', dose: '2.5' }, T).state;
  s = MJ.addRecord(s, { date: '2026-10-21', dose: '2.5' }, T).state;
  const id = s.records[1].id;
  s = MJ.deleteRecord(s, id).state;
  assert.equal(s.records.length, 2, 'not physically removed');
  assert.equal(MJ.computeSchedule(s.records, 7, T).next, '2026-10-21');
  assert.match(MJ.deleteRecord(s, id).error, /찾지/);
  // 같은 날짜로 새 기록이 생기면 복원 불가
  const s2 = MJ.addRecord(s, { date: '2026-10-21', dose: '5' }, T).state;
  assert.match(MJ.restoreRecord(s2, id).error, /이미/);
  s = MJ.restoreRecord(s, id).state;
  assert.equal(s.records[1].deletedAt, undefined);
  assert.equal(MJ.computeSchedule(s.records, 7, T).next, '2026-10-28');
});
t('sanitize broken storage', () => {
  assert.deepEqual(JSON.parse(JSON.stringify(MJ.sanitize(null))), JSON.parse(JSON.stringify(MJ.emptyState())));
  const s = MJ.sanitize({ settings: { dose: '99', interval: 'x' }, records: [{ id: 'a', date: '2026-02-30', dose: '5' }, { id: 'b', date: '2026-10-01', dose: 5 }, 'junk'] });
  assert.equal(s.settings.dose, '2.5'); assert.equal(s.settings.interval, 7);
  assert.equal(s.records.length, 1); assert.equal(s.records[0].dose, '5');
});
t('month grid', () => {
  const g = MJ.monthGrid(2026, 10); // 2026-10-01 is Thursday
  assert.equal(g[0][4], '2026-10-01'); assert.equal(g[0][3], null);
  assert.equal(g.flat().filter(Boolean).length, 31);
  assert.equal(MJ.monthGrid(2028, 2).flat().filter(Boolean).length, 29);
  assert.equal(MJ.monthGrid(2026, 2).flat().filter(Boolean).length, 28);
});
console.log(`TZ=${process.env.TZ || 'default'}: ${n} tests passed`);
