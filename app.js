(function () {
  'use strict';

  /* ======================================================
     1. 아이콘 (선 굵기 1.5px 라인 아이콘)
     ====================================================== */
  var ICONS = {
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    cup: '<path d="M7 3h10l-1.5 18h-7z"/><path d="M7.4 8h9.2"/>',
    candle: '<rect x="7" y="10" width="10" height="11" rx="1.5"/><path d="M12 10V7.5"/><path d="M12 2.5c1.3 1.5 1.6 2.7 0 3.8-1.6-1.1-1.3-2.3 0-3.8z"/>',
    tube: '<path d="M8 3h8l-1 13H9z"/><rect x="9.5" y="16" width="5" height="5" rx="1"/><path d="M8.3 7h7.4"/>',
    diffuser: '<path d="M8 12h8v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M10 12V9h4v3"/><path d="M11 9 8 3M13 9l3-6M12 9V2"/>',
    coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8.5 3c-.8 1 .8 2 0 3M12.5 3c-.8 1 .8 2 0 3"/>',
    mug: '<path d="M5 6h11v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"/><path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/>',
    bath: '<path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5z"/><path d="M6 12V6a2 2 0 0 1 3.5-1.3"/><path d="M7 19l-1 2M17 19l1 2"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    leaf: '<path d="M5 19C5 11 10 5 20 4c-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',
    flower: '<path d="M12 13c-3 0-5-2.5-5-6l2.5 1.5L12 4l2.5 4.5L17 7c0 3.5-2 6-5 6z"/><path d="M12 13v8M12 18c-2 0-4-1-5-3M12 17c2 0 3.5-1 4.5-2.5"/>',
    bolt: '<path d="M13 2 5 14h6l-1 8 8-12h-6z"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20"/>',
    wallet: '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M15.5 14.5h2"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    speaker: '<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="7.5" r="1"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    lamp: '<path d="M8 3h8l3 8H5z"/><path d="M12 11v8M8 21h8"/>',
    umbrella: '<path d="M3 12a9 9 0 0 1 18 0z"/><path d="M12 12v6.5a2 2 0 0 1-4 0M12 3V2"/>',
    pen: '<path d="M15 3l6 6-10 10H5v-6z"/><path d="M13 5l6 6"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7" rx="1.5"/><rect x="17" y="14" width="4" height="7" rx="1.5"/>',
    wine: '<path d="M8 2h8l-.5 6a3.5 3.5 0 0 1-7 0z"/><path d="M12 11.5V21M8 21h8"/>',
    keyboard: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4M17 18h4"/>',
    camera: '<path d="M4 7h3l2-3h6l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
    gem: '<path d="M6 3h12l3 6-9 12L3 9z"/><path d="M3 9h18M12 21 8.5 9 12 3l3.5 6z"/>',
    watch: '<circle cx="12" cy="12" r="6"/><path d="M12 9v3l2 1.5M9 6.5 9.5 2h5l.5 4.5M9 17.5l.5 4.5h5l.5-4.5"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>',
    bed: '<path d="M3 18V6M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10" r="1.5"/>',
    heart: '<path d="M12 20s-7.5-4.5-9-9.5C2 7 4.5 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4c3 0 5.5 3 4.5 6.5-1.5 5-9 9.5-9 9.5z"/>',
    cake: '<path d="M4 21v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"/><path d="M4 16c2 1.5 4 1.5 5.3 0 1.4 1.5 4 1.5 5.4 0 1.3 1.5 3.3 1.5 5.3 0M2 21h20M12 11V8"/><path d="M12 3.5c.9 1 1 1.8 0 2.5-1-.7-.9-1.5 0-2.5z"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M7 17 17 7M9 7h8v8"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    share: '<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    sliders: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>'
  };

  function icon(name, size) {
    size = size || 20;
    return '<span class="icon" aria-hidden="true"><svg width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" focusable="false">' + (ICONS[name] || ICONS.gift) + '</svg></span>';
  }

  function hydrateIcons(root) {
    (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
      var size = el.getAttribute('data-size') || 20;
      el.setAttribute('aria-hidden', 'true');
      el.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" focusable="false">' +
        (ICONS[el.getAttribute('data-icon')] || '') + '</svg>';
      el.removeAttribute('data-icon');
    });
  }

  /* ======================================================
     2. 질문과 상황 데이터
     ====================================================== */
  var WHO = [
    { id: 'lover', label: '연인' },
    { id: 'friend', label: '친구' },
    { id: 'parents', label: '부모님' },
    { id: 'coworker', label: '직장 동료' },
    { id: 'sibling', label: '형제자매' },
    { id: 'me', label: '나에게', title: '나' }
  ];
  var BUDGET = [
    { id: 'b1', label: '3만 원 이하', title: '3만 원 이하' },
    { id: 'b2', label: '3~5만 원', title: '3~5만 원대' },
    { id: 'b3', label: '5~10만 원', title: '5~10만 원대' },
    { id: 'b4', label: '10만 원 이상', title: '10만 원 이상' }
  ];
  var OCC = [
    { id: 'birthday', label: '생일', icon: 'cake', desc: '취향을 아는 사이라면, 오래 쓰는 물건으로', keywords: ['취향', '오래 쓰는'] },
    { id: 'anniversary', label: '기념일', icon: 'heart', desc: '둘만의 날을 기억하게 하는 선물', keywords: ['감성적', '고급스러운'] },
    { id: 'thanks', label: '감사', icon: 'flower', desc: '부담은 적게, 마음은 분명하게', keywords: ['가성비', '감성적'] },
    { id: 'housewarming', label: '집들이', icon: 'home', desc: '새 공간에 바로 놓아 둘 수 있는 것', keywords: ['실용적', '감성적'] },
    { id: 'congrats', label: '축하(취업·승진)', title: '축하', icon: 'star', desc: '새 출발을 응원하는 실용적인 선물', keywords: ['실용적', '고급스러운'] },
    { id: 'cheer', label: '응원·위로', title: '응원', icon: 'sparkle', desc: '말 대신 건네는 작은 쉼', keywords: ['휴식', '건강'] }
  ];

  var QUESTIONS = [
    { key: 'who', title: '누구에게 주나요?', options: WHO },
    { key: 'budget', title: '예산은 얼마인가요?', options: BUDGET },
    { key: 'occ', title: '어떤 날인가요?', options: OCC }
  ];

  var GIFTS = window.GIFTS || [];
  var GIFT_BY_ID = {};
  GIFTS.forEach(function (g) { GIFT_BY_ID[g.id] = g; });

  function find(list, id) {
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function titleOf(opt) { return opt.title || opt.label; }

  /* ======================================================
     3. 공통 도우미
     ====================================================== */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function scrollToEl(el) {
    el.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'start' });
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function shopURL(name) {
    return 'https://search.shopping.naver.com/search/all?query=' + encodeURIComponent(name);
  }

  /* 사진 (images/CREDITS.md 참고) */
  var IMAGES = {
    candle:     { src: 'images/products/candle.jpg',     alt: '나무 받침 위에 켜 둔 흰 기둥 초' },
    beauty:     { src: 'images/products/beauty.jpg',     alt: '밝은 바탕 위 뚜껑을 연 크림 용기' },
    coffee:     { src: 'images/products/coffee.jpg',     alt: '손잡이가 달린 흰 머그잔' },
    flowers:    { src: 'images/products/flowers.jpg',    alt: '장미와 라넌큘러스 꽃다발' },
    stationery: { src: 'images/products/stationery.jpg', alt: '밝은 책상 위 펼친 노트와 펜' },
    dessert:    { src: 'images/dessert.jpg',    alt: '상자에 담긴 초콜릿 트러플' },
    jewelry:    { src: 'images/products/jewelry.jpg',    alt: '물결무늬 접시 위 귀걸이 한 쌍' },
    home:       { src: 'images/products/home-decor.jpg', alt: '흰 테이블 위 마른 꽃을 꽂은 유리 화병' },
    plush:      { src: 'images/plush.jpg',      alt: '분홍 의자에 앉은 곰 인형' },
    cake:       { src: 'images/birthday-cake.jpg', alt: '초를 꽂아 불을 붙인 흰 생크림 케이크' }
  };
  var DEFAULT_IMAGE = 'images/default-neutral.jpg';

  // 사진과 잘 맞는 선물만 연결. 나머지는 지금처럼 선 아이콘 그림을 씀
  var GIFT_IMAGE = {
    2: 'candle',
    3: 'beauty', 5: 'beauty', 18: 'beauty', 41: 'beauty',
    1: 'coffee', 4: 'coffee', 7: 'coffee', 8: 'coffee', 16: 'coffee', 25: 'coffee', 30: 'coffee', 35: 'coffee',
    9: 'flowers', 28: 'flowers',
    12: 'stationery', 32: 'stationery',
    49: 'jewelry',
    13: 'home', 17: 'home', 21: 'home'
  };
  // 카테고리 카드 사진: 따뜻한 자연광 톤으로 맞춘 3:4 사진 (images/category/*-warm.jpg, 기준은 images/CREDITS.md)
  IMAGES.occ_birthday     = { src: 'images/category/occ-birthday-warm.jpg',     alt: '창가 테이블 위 흰 생크림 케이크와 꽃' };
  IMAGES.occ_anniversary  = { src: 'images/category/occ-anniversary-warm.jpg',  alt: '밝은 벽 앞 안개꽃 한 다발' };
  IMAGES.occ_congrats     = { src: 'images/category/occ-congrats-warm.jpg',     alt: '밝은 바닥 위 펼친 노트와 펜' };
  IMAGES.occ_housewarming = { src: 'images/category/occ-housewarming-warm.jpg', alt: '침대 옆 협탁 위 도자기 화병과 마른 꽃' };
  IMAGES.occ_thanks       = { src: 'images/category/occ-thanks-warm.jpg',       alt: '햇빛 드는 테이블 위 찻잔과 받침' };
  IMAGES.occ_cheer        = { src: 'images/category/occ-cheer.jpg',        alt: '흐린 창가에 켜 둔 초 한 자루' };
  var OCC_IMAGE = {
    birthday: 'occ_birthday', anniversary: 'occ_anniversary', thanks: 'occ_thanks',
    housewarming: 'occ_housewarming', congrats: 'occ_congrats', cheer: 'occ_cheer'
  };

  function imgHTML(key, size) {
    var im = IMAGES[key];
    if (!im) return '';
    return '<img class="photo" src="' + im.src + '" alt="' + escapeHTML(im.alt) + '" width="' + size + '" height="' + size + '" loading="lazy" decoding="async">';
  }

  // 사진을 못 불러오면 깨진 그림 대신 기본 이미지로, 그것도 안 되면 사진을 빼고 아이콘 그림을 보여 줌
  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG' || !img.classList.contains('photo')) return;
    if (img.getAttribute('data-fallback')) {
      var box = img.parentNode;
      img.remove();
      if (box) box.classList.remove('has-photo');
      return;
    }
    img.setAttribute('data-fallback', '1');
    img.src = DEFAULT_IMAGE;
  }, true);

  var toastTimer;
  function toast(msg) {
    var el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('is-show'); }, 1800);
  }

  /* ======================================================
     4. 기능 1 · 조건 고르기
     ====================================================== */
  var form = $('#finderForm');

  function renderQuestions() {
    $('#questions').innerHTML = QUESTIONS.map(function (q, i) {
      return '<fieldset class="question" data-q="' + q.key + '">' +
        '<legend><span class="q-num"><span class="num-text">' + (i + 1) + '</span>' + icon('check', 14) + '</span>' + q.title + '</legend>' +
        '<div class="chips">' + q.options.map(function (o) {
          return '<label class="chip"><input type="radio" name="' + q.key + '" value="' + o.id + '"><span>' + o.label + '</span></label>';
        }).join('') + '</div></fieldset>';
    }).join('');
  }

  function getSelection() {
    var data = {};
    QUESTIONS.forEach(function (q) {
      var checked = form.querySelector('input[name="' + q.key + '"]:checked');
      data[q.key] = checked ? checked.value : null;
    });
    return data;
  }

  function setChoice(key, value) {
    var input = form.querySelector('input[name="' + key + '"][value="' + value + '"]');
    if (input) input.checked = true;
  }

  function updateFinder() {
    var sel = getSelection();
    var left = 0;
    var parts = QUESTIONS.map(function (q) {
      var fs = form.querySelector('[data-q="' + q.key + '"]');
      var opt = sel[q.key] ? find(q.options, sel[q.key]) : null;
      fs.classList.toggle('is-done', !!opt);
      if (!opt) { left++; return '<span class="empty">—</span>'; }
      return escapeHTML(titleOf(opt) === '나' ? '나에게' : titleOf(opt));
    });
    $('#summary').innerHTML = parts.join(' · ');
    $('#recommendBtn').disabled = left > 0;
    $('#finderHint').textContent = left > 0
      ? left + '개 더 고르면 추천받을 수 있어요'
      : '좋아요. 버튼을 누르면 바로 추천해 드려요';
  }

  /** 아직 안 고른 첫 질문(없으면 첫 질문)에 초점 */
  function focusFinder(key) {
    var sel = getSelection();
    var target = key || (QUESTIONS.filter(function (q) { return !sel[q.key]; })[0] || QUESTIONS[0]).key;
    var input = form.querySelector('input[name="' + target + '"]:checked') ||
      form.querySelector('input[name="' + target + '"]');
    scrollToEl($('#finder'));
    if (input) setTimeout(function () { input.focus({ preventScroll: true }); }, reduceMotion.matches ? 0 : 400);
  }

  form.addEventListener('change', updateFinder);

  /* ======================================================
     5. 기능 2 · 선물 추천 (추천 규칙: plan-draft 4-1 + features 05)
     ====================================================== */
  var state = { sel: null, pool: [], shown: 0 };

  function preferKeywords(list, occId) {
    var kw = find(OCC, occId).keywords;
    var score = function (g) { return g.keywords.filter(function (k) { return kw.indexOf(k) > -1; }).length; };
    // 섞은 뒤 '그날에 어울리는 키워드'가 많은 순서로 (같은 점수 안에서는 무작위 순서 유지)
    return shuffle(list.slice()).sort(function (a, b) { return score(b) - score(a); });
  }

  function buildPool(sel) {
    var used = {};
    var pool = [];
    function add(list, similar) {
      list.forEach(function (g) {
        if (used[g.id]) return;
        used[g.id] = true;
        pool.push({ gift: g, similar: similar });
      });
    }
    var forWho = GIFTS.filter(function (g) { return g.who.indexOf(sel.who) > -1; });
    var sameBudget = forWho.filter(function (g) { return g.budget === sel.budget; });

    // 1) 세 조건이 모두 맞는 선물
    add(preferKeywords(sameBudget.filter(function (g) { return g.occasion.indexOf(sel.occ) > -1; }), sel.occ), false);
    // 2) 모자라면 '어떤 날'을 빼고
    add(preferKeywords(sameBudget, sel.occ), true);
    // 3) 그래도 모자라면 예산 한 칸 아래에서
    var idx = BUDGET.findIndex(function (b) { return b.id === sel.budget; });
    if (idx > 0) {
      var lower = forWho.filter(function (g) { return g.budget === BUDGET[idx - 1].id; });
      var lowerMatch = lower.filter(function (g) { return g.occasion.indexOf(sel.occ) > -1; });
      add(preferKeywords(lowerMatch, sel.occ), true);
      add(preferKeywords(lower, sel.occ), true);
    }
    return pool;
  }

  var resultSection = $('#result');
  var grid = $('#giftGrid');
  var cardSeq = 0;

  function resultTitle(sel) {
    var who = find(WHO, sel.who), budget = find(BUDGET, sel.budget), occ = find(OCC, sel.occ);
    return escapeHTML(titleOf(who)) + '에게 줄 ' + escapeHTML(budget.title) + ' ' + escapeHTML(titleOf(occ)) + ' 선물이에요';
  }

  function renderCondChips(sel) {
    $('#condChips').innerHTML = QUESTIONS.map(function (q) {
      var opt = find(q.options, sel[q.key]);
      return '<button class="cond-chip" type="button" data-edit="' + q.key + '" aria-label="' + escapeHTML(q.title) + ' ' + escapeHTML(opt.label) + ', 바꾸기">' +
        escapeHTML(opt.label) + icon('edit', 14) + '</button>';
    }).join('');
  }

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  function cardHTML(item, rank) {
    var g = item.gift;
    var on = isWished(g.id);
    var detailId = 'detail-' + (++cardSeq);
    return '<article class="gift-card is-new" data-gift="' + g.id + '">' +
      '<div class="gift-thumb gift-thumb--t' + (g.id % 3) + (GIFT_IMAGE[g.id] ? ' has-photo' : '') + '">' + icon(g.icon, 72) + imgHTML(GIFT_IMAGE[g.id], 800) +
        '<span class="badge">' + (item.similar ? '비슷한 추천 ' : '추천 ') + rank + '</span>' +
        '<button class="wish-btn' + (on ? ' is-on' : '') + '" type="button" data-wish="' + g.id + '" aria-pressed="' + on + '" aria-label="' + escapeHTML(g.name) + ' 찜하기">' + icon('heart', 20) + '</button>' +
      '</div>' +
      '<div class="gift-body">' +
        '<p class="gift-no">No. ' + pad2(g.id) + '</p>' +
        '<h3 class="gift-name">' + escapeHTML(g.name) + '</h3>' +
        '<p class="gift-price">' + escapeHTML(g.price) + '</p>' +
        '<p class="gift-reason">' + escapeHTML(g.reason) + '</p>' +
        '<div class="gift-detail" id="' + detailId + '" hidden><p>' + escapeHTML(g.detail) + '</p></div>' +
        '<ul class="tags" aria-label="키워드">' + g.keywords.map(function (k) { return '<li>#' + escapeHTML(k) + '</li>'; }).join('') + '</ul>' +
        '<div class="gift-actions">' +
          '<button class="text-btn text-btn--sub" type="button" data-more aria-expanded="false" aria-controls="' + detailId + '"><span class="more-label">더 보기</span>' + icon('chevronDown', 16) + '</button>' +
          '<a class="text-btn" href="' + shopURL(g.name) + '" target="_blank" rel="noopener noreferrer">상품 찾아보기' + icon('external', 16) + '<span class="sr-only">(새 창)</span></a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function skeletonHTML() {
    var one = '<div class="skeleton" aria-hidden="true"><div class="skeleton-thumb"></div><div class="skeleton-body"><div class="skeleton-line"></div><div class="skeleton-line"></div><div class="skeleton-line"></div></div></div>';
    return one + one + one;
  }

  function appendCards(count) {
    var items = state.pool.slice(state.shown, state.shown + count);
    var html = items.map(function (item, i) { return cardHTML(item, state.shown + i + 1); }).join('');
    grid.insertAdjacentHTML('beforeend', html);
    state.shown += items.length;
    // '비슷한 선물' 안내
    var hasSimilar = state.pool.slice(0, state.shown).some(function (it) { return it.similar; });
    $('#resultNote').hidden = !hasSimilar;
    // 기능 3 · 더 보여 줄 선물이 없으면 버튼이 사라진다
    $('#moreBtn').hidden = state.shown >= state.pool.length;
    return items.length;
  }

  function recommend(opts) {
    opts = opts || {};
    var sel = getSelection();
    if (!sel.who || !sel.budget || !sel.occ) return;

    state.sel = sel;
    state.pool = buildPool(sel);
    state.shown = 0;

    resultSection.hidden = false;
    $('#resultTitle').innerHTML = resultTitle(sel);
    renderCondChips(sel);
    $('#resultNote').hidden = true;
    $('#resultEmpty').hidden = true;
    $('#resultActions').hidden = true;
    grid.hidden = false;
    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = skeletonHTML();
    scrollToEl(resultSection);

    setTimeout(function () {
      grid.innerHTML = '';
      grid.removeAttribute('aria-busy');
      if (!state.pool.length) {
        grid.hidden = true;
        $('#resultEmpty').hidden = false;
        $('#resultLive').textContent = '조건에 맞는 선물이 없어요.';
        return;
      }
      var n = appendCards(3);
      $('#resultActions').hidden = false;
      $('#resultLive').textContent = '추천 결과 ' + n + '개';
      if (!opts.silent) $('#resultTitle').focus({ preventScroll: true });
    }, 400);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    recommend();
  });

  /* 기능 3 · ＋ 2개 더 */
  $('#moreBtn').addEventListener('click', function () {
    var before = state.shown;
    var n = appendCards(2);
    if (!n) return;
    $('#resultLive').textContent = '선물 ' + n + '개를 더 보여 드려요. 지금 ' + state.shown + '개';
    var firstNew = grid.children[before];
    if (firstNew) {
      var link = firstNew.querySelector('.gift-name');
      firstNew.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
      if (link) { link.setAttribute('tabindex', '-1'); link.focus({ preventScroll: true }); }
    }
    if ($('#moreBtn').hidden) toast('준비한 선물을 모두 보여 드렸어요');
  });

  /* 기능 5 · 다시 고르기 (고른 조건은 그대로 남아 있음) */
  document.addEventListener('click', function (e) {
    var re = e.target.closest('[data-rechoose]');
    if (re) { focusFinder('who'); return; }
    var edit = e.target.closest('[data-edit]');
    if (edit) focusFinder(edit.getAttribute('data-edit'));
  });

  /* 기능 4 · 더 보기 */
  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-more]');
    if (!btn) return;
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    var open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.more-label').textContent = open ? '접기' : '더 보기';
    panel.hidden = !open;
  });

  /* ======================================================
     6. 기능 6 · 찜하기 (브라우저 localStorage)
     ====================================================== */
  var WISH_KEY = 'giftFinder.wishlist';
  var wishes = loadWishes();

  function loadWishes() {
    try {
      var raw = JSON.parse(localStorage.getItem(WISH_KEY) || '[]');
      return Array.isArray(raw) ? raw.filter(function (w) { return GIFT_BY_ID[w.gift_id]; }) : [];
    } catch (err) { return []; }
  }
  function saveWishes() {
    try { localStorage.setItem(WISH_KEY, JSON.stringify(wishes)); } catch (err) { /* 저장 불가 환경 */ }
  }
  function isWished(id) {
    return wishes.some(function (w) { return w.gift_id === id; });
  }

  function toggleWish(id) {
    var g = GIFT_BY_ID[id];
    if (!g) return;
    if (isWished(id)) {
      wishes = wishes.filter(function (w) { return w.gift_id !== id; });
      toast('찜을 풀었어요');
    } else {
      wishes.push({ gift_id: id, saved_at: new Date().toISOString() });
      toast('찜했어요');
    }
    saveWishes();
    syncWishUI();
  }

  function syncWishUI() {
    var n = wishes.length;
    $('#wishCount').textContent = n;
    $('#wishTitleCount').textContent = n;
    $$('[data-wish]').forEach(function (btn) {
      var on = isWished(Number(btn.getAttribute('data-wish')));
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', String(on));
    });
    renderWishList();
  }

  function renderWishList() {
    var list = wishes.slice().sort(function (a, b) { return a.saved_at < b.saved_at ? 1 : -1; });
    $('#wishEmpty').hidden = list.length > 0;
    $('#wishList').hidden = list.length === 0;
    $('#wishList').innerHTML = list.map(function (w) {
      var g = GIFT_BY_ID[w.gift_id];
      return '<li class="wish-item">' +
        '<div class="wish-thumb' + (GIFT_IMAGE[g.id] ? ' has-photo' : '') + '">' + icon(g.icon, 32) + imgHTML(GIFT_IMAGE[g.id], 160) + '</div>' +
        '<div><p class="wish-name">' + escapeHTML(g.name) + '</p>' +
          '<p class="wish-meta">' + escapeHTML(g.price) + ' · #' + g.keywords.map(escapeHTML).join(' #') + '</p>' +
          '<a class="text-btn" href="' + shopURL(g.name) + '" target="_blank" rel="noopener noreferrer">상품 찾아보기' + icon('external', 16) + '<span class="sr-only">(새 창)</span></a></div>' +
        '<button class="icon-btn" type="button" data-unwish="' + g.id + '" aria-label="' + escapeHTML(g.name) + ' 찜 풀기">' + icon('x', 20) + '</button>' +
      '</li>';
    }).join('');
  }

  document.addEventListener('click', function (e) {
    var w = e.target.closest('[data-wish]');
    if (w) { toggleWish(Number(w.getAttribute('data-wish'))); return; }
    var u = e.target.closest('[data-unwish]');
    if (u) {
      var items = $$('#wishList [data-unwish]');
      var idx = items.indexOf(u);
      toggleWish(Number(u.getAttribute('data-unwish')));
      // 지운 뒤 초점을 다음 항목(없으면 닫기 버튼)으로
      var next = $$('#wishList [data-unwish]')[Math.min(idx, items.length - 2)];
      (next || $('#wishClose')).focus();
    }
  });

  // 찜 목록 패널
  var drawer = $('#wishDrawer');
  var overlay = $('#drawerOverlay');
  var lastFocus = null;

  function openDrawer() {
    lastFocus = document.activeElement;
    renderWishList();
    drawer.hidden = false;
    overlay.hidden = false;
    document.body.classList.add('is-locked');
    requestAnimationFrame(function () {
      drawer.classList.add('is-open');
      overlay.classList.add('is-open');
    });
    $('#wishClose').focus();
  }
  function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    setTimeout(function () { drawer.hidden = true; overlay.hidden = true; }, reduceMotion.matches ? 0 : 250);
    if (lastFocus) lastFocus.focus();
  }

  $('#wishOpen').addEventListener('click', openDrawer);
  $('#wishClose').addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  drawer.addEventListener('keydown', function (e) {
    if (e.key !== 'Tab') return;
    var f = $$('a[href], button:not([disabled])', drawer);
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  /* ======================================================
     7. 기능 7 · 결과 공유하기
     ====================================================== */
  function shareURL(sel) {
    var base = location.href.split(/[?#]/)[0];
    return base + '?who=' + sel.who + '&budget=' + sel.budget + '&occ=' + sel.occ;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { /* noop */ }
      document.body.removeChild(ta);
      ok ? resolve() : reject();
    });
  }

  $('#shareBtn').addEventListener('click', function () {
    if (!state.sel) return;
    var url = shareURL(state.sel);
    var isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (navigator.share && isTouch) {
      navigator.share({
        title: 'GIFTÉ 선물 추천',
        text: $('#resultTitle').textContent,
        url: url
      }).catch(function () { /* 사용자가 공유 창을 닫음 */ });
      return;
    }
    copyText(url).then(function () { toast('링크를 복사했어요'); }, function () {
      window.prompt('아래 링크를 복사해 주세요', url);
    });
  });

  function applyURLParams() {
    var p = new URLSearchParams(location.search);
    var who = p.get('who'), budget = p.get('budget'), occ = p.get('occ');
    var ok = find(WHO, who) && find(BUDGET, budget) && find(OCC, occ);
    if (!ok) return false;
    setChoice('who', who); setChoice('budget', budget); setChoice('occ', occ);
    updateFinder();
    recommend({ silent: true });
    return true;
  }

  /* ======================================================
     8. 상황별 선물
     ====================================================== */
  var OCC_EN = { birthday: 'Birthday', anniversary: 'Anniversary', thanks: 'Thanks', housewarming: 'Housewarming', congrats: 'Graduation', cheer: 'Cheer up' };
  // 카테고리 카드로 보여 줄 날 (이미지 카드 5개). 빠진 날은 아래 '그 밖의 날' 글자 링크로
  var FEATURED_OCC = ['birthday', 'anniversary', 'housewarming', 'thanks', 'congrats'];
  var CARD_LABEL = { congrats: '취업·졸업', cheer: '응원·위로' };

  // 이미지 + 카테고리명만. 카드 전체가 하나의 버튼 (누르면 그 날을 골라 선물 찾기로 이동)
  function occasionCardHTML(o) {
    var name = CARD_LABEL[o.id] || titleOf(o);
    return '<button class="occasion-card" type="button" data-occasion="' + o.id + '" aria-label="' + escapeHTML(name) + ' 선물 찾기">' +
      '<span class="occasion-media has-photo">' + icon(o.icon, 40) + imgHTML(OCC_IMAGE[o.id], 750) + '</span>' +
      '<span class="occasion-name">' + escapeHTML(name) + '<span class="occasion-en" lang="en">' + OCC_EN[o.id] + '</span></span>' +
    '</button>';
  }

  function renderOccasions() {
    $('#occasionGrid').innerHTML = FEATURED_OCC.map(function (id) {
      return occasionCardHTML(find(OCC, id));
    }).join('');

    var rest = OCC.filter(function (o) { return FEATURED_OCC.indexOf(o.id) < 0; });
    $('#occasionMore').hidden = rest.length === 0;
    $('#occasionMore').innerHTML = !rest.length ? '' : '<span class="occasion-more-label">그 밖의 날</span>' + rest.map(function (o) {
      return '<button class="more-link" type="button" data-occasion="' + o.id + '">' + escapeHTML(CARD_LABEL[o.id] || titleOf(o)) + '</button>';
    }).join('');
  }

  function onOccasionClick(e) {
    var btn = e.target.closest('[data-occasion]');
    if (!btn) return;
    setChoice('occ', btn.getAttribute('data-occasion'));
    updateFinder();
    focusFinder();
  }
  $('#occasionGrid').addEventListener('click', onOccasionClick);
  $('#occasionMore').addEventListener('click', onOccasionClick);

  /* ------------------------------------------------------
     8-1. 다가오는 기념일 (SPECIAL DATES)
     매년 같은 날짜인 기념일만 담고, 오늘 기준으로 다음 날짜를 계산해 가까운 순서로 4개를 보여 줌
     카드를 누르면 그날에 맞는 '그날'(+ 받는 사람)을 골라 둔 채 선물 찾기로 이동
     ------------------------------------------------------ */
  var SPECIAL_DATES = [
    { id: 'valentine', month: 2,  day: 14, name: '발렌타인데이', en: "Valentine's Day", desc: '초콜릿과 함께 좋아하는 마음을 전하는 날', occ: 'anniversary', who: 'lover' },
    { id: 'whiteday',  month: 3,  day: 14, name: '화이트데이',   en: 'White Day',       desc: '달콤한 선물로 받은 마음에 답하는 날',   occ: 'anniversary', who: 'lover' },
    { id: 'parents',   month: 5,  day: 8,  name: '어버이날',     en: "Parents' Day",    desc: '카네이션과 함께 부모님께 고마움을 전하는 날', occ: 'thanks', who: 'parents' },
    { id: 'teacher',   month: 5,  day: 15, name: '스승의 날',    en: "Teachers' Day",   desc: '고마운 선생님께 작은 감사를 건네는 날', occ: 'thanks' },
    { id: 'pepero',    month: 11, day: 11, name: '빼빼로데이',   en: 'Pepero Day',      desc: '가까운 사람과 가볍게 달콤함을 나누는 날', occ: 'thanks', who: 'friend' },
    { id: 'christmas', month: 12, day: 25, name: '크리스마스',   en: 'Christmas',       desc: '한 해를 함께한 사람에게 선물을 건네는 날', occ: 'anniversary' }
  ];
  IMAGES.date_valentine = { src: 'images/dates/date-valentine.jpg', alt: '나무 테이블 위 뚜껑을 연 초콜릿 상자' };
  IMAGES.date_whiteday  = { src: 'images/dates/date-whiteday.jpg',  alt: '마른 꽃 사이에 놓인 마카롱과 와플 콘' };
  IMAGES.date_parents   = { src: 'images/dates/date-parents.jpg',   alt: '밝은 벽 앞 화병에 꽂은 카네이션' };
  IMAGES.date_teacher   = { src: 'images/dates/date-teacher.jpg',   alt: '손글씨 편지 봉투와 꽃 몇 송이' };
  IMAGES.date_pepero    = { src: 'images/dates/date-pepero.jpg',    alt: '상자에 담긴 초콜릿과 흩어진 리본' };
  IMAGES.date_christmas = { src: 'images/dates/date-christmas.jpg', alt: '불빛이 켜진 트리에 걸린 흰 오너먼트' };
  var DATES_SHOWN = 4;
  var WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

  function pad2(n) { return (n < 10 ? '0' : '') + n; }

  /** 오늘(자정 기준)부터 가까운 순서로 정렬한 기념일. 올해 날짜가 지났으면 내년 날짜로 */
  function upcomingDates(now) {
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return SPECIAL_DATES.map(function (sd) {
      var date = new Date(today.getFullYear(), sd.month - 1, sd.day);
      if (date < today) date = new Date(today.getFullYear() + 1, sd.month - 1, sd.day);
      return { sd: sd, date: date, dday: Math.round((date - today) / 86400000) };
    }).sort(function (a, b) { return a.dday - b.dday; });
  }

  function dateCardHTML(item, i) {
    var sd = item.sd, d = item.date;
    var ddayText = item.dday === 0 ? 'D-DAY' : 'D-' + item.dday;
    return '<li><button class="date-card' + (i === 0 ? ' is-next' : '') + '" type="button" data-date="' + sd.id + '" ' +
        'aria-label="' + escapeHTML(sd.name + ', ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일, ' + (item.dday === 0 ? '오늘' : item.dday + '일 남음') + '. 선물 찾기') + '">' +
      '<span class="date-media has-photo">' + imgHTML('date_' + sd.id, 750) + '</span>' +
      '<span class="date-when">' +
        '<span class="date-day" lang="en">' + pad2(d.getMonth() + 1) + '.' + pad2(d.getDate()) + '</span>' +
        '<span class="date-dday" lang="en">' + ddayText + '</span>' +
      '</span>' +
      '<span class="date-sub">' + d.getFullYear() + ' · ' + WEEKDAY[d.getDay()] + '요일</span>' +
      '<span class="date-name">' + escapeHTML(sd.name) + '<span class="date-en" lang="en">' + escapeHTML(sd.en) + '</span></span>' +
      '<span class="date-desc">' + escapeHTML(sd.desc) + '</span>' +
    '</button></li>';
  }

  function renderDates() {
    var grid = $('#dateGrid');
    if (!grid) return;
    grid.innerHTML = upcomingDates(new Date()).slice(0, DATES_SHOWN).map(dateCardHTML).join('');
  }

  if ($('#dateGrid')) $('#dateGrid').addEventListener('click', function (e) {
    var btn = e.target.closest('[data-date]');
    if (!btn) return;
    var sd = find(SPECIAL_DATES, btn.getAttribute('data-date'));
    if (!sd) return;
    setChoice('occ', sd.occ);
    if (sd.who) setChoice('who', sd.who);
    updateFinder();
    focusFinder();
    var who = sd.who ? find(WHO, sd.who) : null;
    toast(sd.name + ' 선물: ' + (who ? titleOf(who) + ' · ' : '') + titleOf(find(OCC, sd.occ)) + '로 골라 뒀어요');
  });

  /* ------------------------------------------------------
     8-2. 나의 기념일 (직접 등록 · D-Day · 수정 · 삭제, LocalStorage 저장)
     날짜는 'YYYY-MM-DD' 글자로 저장하고, 계산할 때만 연·월·일 숫자로 나눠
     Date.UTC로 '며칠째'를 셈 → 시간대·서머타임 때문에 하루 밀리는 일이 없음
     ------------------------------------------------------ */
  var MYDATE_KEY = 'gifte.myDates.v1';
  var myDates = [];
  var editingId = null;
  var storageOK = true;

  function parseYMD(str) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str || '');
    if (!m) return null;
    var y = +m[1], mo = +m[2], d = +m[3];
    var check = new Date(Date.UTC(y, mo - 1, d));
    if (check.getUTCFullYear() !== y || check.getUTCMonth() !== mo - 1 || check.getUTCDate() !== d) return null; // 2월 30일 같은 없는 날짜
    return { y: y, m: mo, d: d };
  }
  function dayNo(y, m, d) { return Math.round(Date.UTC(y, m - 1, d) / 86400000); }
  function todayNo() { var n = new Date(); return dayNo(n.getFullYear(), n.getMonth() + 1, n.getDate()); }
  function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }

  /** 이번에 셀 날짜: 매년 반복이면 오늘 이후 가장 가까운 그날(2월 29일은 평년엔 28일), 아니면 적은 날짜 그대로 */
  function targetOf(item, today) {
    var p = parseYMD(item.date);
    if (!item.yearly) return { y: p.y, m: p.m, d: p.d, no: dayNo(p.y, p.m, p.d) };
    var y = new Date(Date.UTC(1970, 0, 1 + today)).getUTCFullYear();
    for (var i = 0; i < 2; i++, y++) {
      var d = (p.m === 2 && p.d === 29 && !isLeap(y)) ? 28 : p.d;
      var no = dayNo(y, p.m, d);
      if (no >= today) return { y: y, m: p.m, d: d, no: no };
    }
  }

  /** D-30 · D-7 · D-1 · D-DAY · D+1 */
  function ddayLabel(diff) { return diff === 0 ? 'D-DAY' : diff > 0 ? 'D-' + diff : 'D+' + (-diff); }

  function loadMyDates() {
    var raw = null;
    try { raw = localStorage.getItem(MYDATE_KEY); } catch (e) { storageOK = false; }
    var list = [];
    try { list = JSON.parse(raw || '[]'); } catch (e) { list = []; }
    if (!Array.isArray(list)) list = [];
    // 저장된 값이 깨졌거나 모양이 다르면 그 항목만 빼고 불러옴
    myDates = list.filter(function (it) {
      return it && typeof it.id === 'string' && typeof it.name === 'string' && it.name.trim() && parseYMD(it.date);
    }).map(function (it) {
      return { id: it.id, name: it.name.trim().slice(0, 20), date: it.date, yearly: !!it.yearly };
    });
  }
  function saveMyDates() {
    try { localStorage.setItem(MYDATE_KEY, JSON.stringify(myDates)); storageOK = true; }
    catch (e) { storageOK = false; toast('이 브라우저에서는 저장할 수 없어요. 새로고침하면 사라져요'); }
  }

  function renderMyDates() {
    var listEl = $('#myDateList');
    if (!listEl) return;
    var today = todayNo();
    var rows = myDates.map(function (it) {
      var t = targetOf(it, today);
      return { it: it, t: t, diff: t.no - today };
    }).sort(function (a, b) {
      // 다가오는 날(오늘 포함)을 가까운 순서로, 지난 날은 그 뒤에 최근 순서로
      var ap = a.diff < 0, bp = b.diff < 0;
      if (ap !== bp) return ap ? 1 : -1;
      return ap ? b.diff - a.diff : a.diff - b.diff;
    });

    listEl.innerHTML = rows.map(function (r) {
      var it = r.it, t = r.t;
      var dow = WEEKDAY[new Date(Date.UTC(t.y, t.m - 1, t.d)).getUTCDay()];
      var cls = 'mydate-item' + (r.diff === 0 ? ' is-today' : '') + (r.diff < 0 ? ' is-past' : '') + (r.diff > 0 && r.diff <= 7 ? ' is-soon' : '');
      return '<li class="' + cls + '" data-id="' + escapeHTML(it.id) + '">' +
        '<span class="mydate-dday" lang="en">' + ddayLabel(r.diff) + '</span>' +
        '<div class="mydate-info">' +
          '<p class="mydate-name">' + escapeHTML(it.name) + '</p>' +
          '<p class="mydate-when">' + t.y + '.' + pad2(t.m) + '.' + pad2(t.d) + ' ' + dow + '요일' + (it.yearly ? ' · 매년' : '') + '</p>' +
        '</div>' +
        '<div class="mydate-tools">' +
          '<button class="mydate-gift" type="button" data-act="gift">선물 찾기' + icon('arrowRight', 16) + '</button>' +
          '<span class="mydate-edit">' +
          '<button type="button" data-act="edit" aria-label="' + escapeHTML(it.name) + ' 수정">수정</button>' +
          '<button type="button" data-act="delete" aria-label="' + escapeHTML(it.name) + ' 삭제">삭제</button>' +
          '</span>' +
        '</div>' +
      '</li>';
    }).join('');
    $('#myDateEmpty').hidden = rows.length > 0;
    listEl.hidden = rows.length === 0;
    $('#myDateCount').textContent = rows.length;
  }

  function setMyDateError(msg, field) {
    $('#myDateError').textContent = msg || '';
    [$('#myDateName'), $('#myDateDate')].forEach(function (el) { el.removeAttribute('aria-invalid'); });
    if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); }
  }

  function resetMyDateForm() {
    editingId = null;
    $('#myDateForm').reset();
    $('#myDateYearly').checked = true;
    $('#myDateFormTitle').textContent = '나의 기념일 등록';
    $('#myDateSubmit').textContent = '등록하기';
    $('#myDateCancel').hidden = true;
    setMyDateError('');
  }

  function startEdit(id) {
    var it = find(myDates, id);
    if (!it) return;
    editingId = id;
    $('#myDateName').value = it.name;
    $('#myDateDate').value = it.date;
    $('#myDateYearly').checked = it.yearly;
    $('#myDateFormTitle').textContent = '기념일 수정';
    $('#myDateSubmit').textContent = '수정 완료';
    $('#myDateCancel').hidden = false;
    setMyDateError('');
    $('#myDateForm').scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
    $('#myDateName').focus({ preventScroll: true });
  }

  if ($('#myDateForm')) {
    $('#myDateForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#myDateName').value.trim();
      var date = $('#myDateDate').value;
      if (!name) return setMyDateError('기념일 이름을 입력해 주세요.', $('#myDateName'));
      if (!parseYMD(date)) return setMyDateError('날짜를 골라 주세요.', $('#myDateDate'));
      var yearly = $('#myDateYearly').checked;
      var wasEditing = !!editingId;
      if (wasEditing) {
        var it = find(myDates, editingId);
        if (it) { it.name = name; it.date = date; it.yearly = yearly; }
      } else {
        myDates.push({ id: 'd' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name: name, date: date, yearly: yearly });
      }
      saveMyDates();
      resetMyDateForm();
      renderMyDates();
      toast(wasEditing ? '‘' + name + '’ 기념일을 수정했어요' : '‘' + name + '’ 기념일을 등록했어요');
    });
    $('#myDateCancel').addEventListener('click', resetMyDateForm);

    $('#myDateList').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var id = btn.closest('[data-id]').getAttribute('data-id');
      var it = find(myDates, id);
      if (!it) return;
      var act = btn.getAttribute('data-act');
      if (act === 'edit') return startEdit(id);
      if (act === 'gift') return focusFinder();
      if (act === 'delete') {
        if (!window.confirm('‘' + it.name + '’ 기념일을 삭제할까요?')) return;
        myDates = myDates.filter(function (x) { return x.id !== id; });
        if (editingId === id) resetMyDateForm();
        saveMyDates();
        renderMyDates();
        toast('‘' + it.name + '’ 기념일을 삭제했어요');
      }
    });

    // 다른 탭에서 바꿨을 때, 자정을 넘겨 다시 볼 때 D-Day를 새로 계산
    window.addEventListener('storage', function (e) { if (e.key === MYDATE_KEY) { loadMyDates(); renderMyDates(); } });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) renderMyDates(); });
  }


  /* ======================================================
     9. 헤더 · 메뉴 · 스크롤
     ====================================================== */
  var header = $('#siteHeader');
  var menuToggle = $('#menuToggle');
  var mobileMenu = $('#mobileMenu');

  function setMenu(open) {
    mobileMenu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    menuToggle.innerHTML = icon(open ? 'x' : 'menu', 20);
  }
  menuToggle.addEventListener('click', function () { setMenu(mobileMenu.hidden); });
  mobileMenu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!drawer.hidden) closeDrawer();
    else if (!mobileMenu.hidden) { setMenu(false); menuToggle.focus(); }
  });

  // '선물 추천 시작하기' · '추천받기' · '지금 선물 찾기' → 선물 찾기 + 첫 칩에 초점
  $$('[data-start]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      focusFinder();
    });
  });

  // 로고 → 맨 위로
  $$('a[href="#top"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      history.replaceState(null, '', location.pathname + location.search);
    });
  });

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 4); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 지금 보고 있는 영역의 메뉴에 밑줄
  var navLinks = $$('[data-nav]');
  var spyTargets = [
    { el: $('#finder'), nav: 'finder' },
    { el: resultSection, nav: 'finder' },
    { el: $('#occasions'), nav: 'occasions' },
    { el: $('#dates'), nav: 'dates' },
    { el: $('#guide'), nav: 'guide' }
  ];
  function updateSpy() {
    var line = window.innerHeight * 0.4;
    var current = null;
    spyTargets.forEach(function (t) {
      if (t.el.hidden) return;
      var r = t.el.getBoundingClientRect();
      if (r.top <= line && r.bottom > line) current = t.nav;
    });
    navLinks.forEach(function (a) {
      var on = a.getAttribute('data-nav') === current;
      a.classList.toggle('is-current', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  var spyTick = false;
  window.addEventListener('scroll', function () {
    if (spyTick) return;
    spyTick = true;
    requestAnimationFrame(function () { updateSpy(); spyTick = false; });
  }, { passive: true });
  window.addEventListener('resize', updateSpy);

  // 자주 묻는 질문: 한 번에 하나만 열림
  $$('#faqList details').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      $$('#faqList details').forEach(function (o) { if (o !== d) o.open = false; });
    });
  });

  /* 흐르는 핑크 띠: 화면이 문구 한 묶음보다 넓으면(약 1700px 이상) 끝에 빈 공간이 생기므로
     문구 묶음을 화면을 채울 만큼 반복해 넣고, 길어진 만큼 시간도 늘려 속도는 그대로 유지 */
  var marqueeTrack = $('.marquee-track');
  var marqueeCount = marqueeTrack ? marqueeTrack.children.length / 2 : 0;  // 한 묶음의 문구 수 (6개)
  var marqueeUnit = marqueeTrack ? Array.prototype.slice.call(marqueeTrack.children, 0, marqueeCount).map(function (s) { return s.outerHTML; }).join('') : '';
  var marqueeReps = 1;
  function fitMarquee() {
    if (!marqueeTrack) return;
    var items = marqueeTrack.children;
    var unitWidth = items[marqueeCount].offsetLeft - items[0].offsetLeft;   // 문구 한 묶음 길이 (CSS 40s 기준)
    if (!unitWidth) return;
    var reps = Math.max(1, Math.ceil(window.innerWidth / unitWidth));
    if (reps === marqueeReps) return;
    marqueeReps = reps;
    var half = new Array(reps + 1).join(marqueeUnit);
    marqueeTrack.innerHTML = half + half;                                   // 두 벌 → -50% 이동으로 끊김 없이 반복
    marqueeTrack.style.animationDuration = (40 * reps) + 's';
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitMarquee);   // 글꼴이 늦게 로드되면 길이를 다시 잼
  window.addEventListener('resize', fitMarquee);

  /* ======================================================
     10. 시작
     ====================================================== */
  hydrateIcons();
  fitMarquee();
  // app.js보다 먼저 실패한 사진(메인 배너 등)도 기본 이미지로 바꿈
  $$('img.photo').forEach(function (img) {
    if (img.complete && !img.naturalWidth) img.dispatchEvent(new Event('error'));
  });
  renderQuestions();
  renderOccasions();
  renderDates();
  loadMyDates();
  renderMyDates();
  updateFinder();
  syncWishUI();
  applyURLParams();
  updateSpy();
})();
