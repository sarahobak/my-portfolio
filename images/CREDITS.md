# 이미지 출처

모든 사진은 [Unsplash](https://unsplash.com)에서 가져왔고, 각 사진 페이지에서 **Unsplash License**(무료, 상업적 이용 가능, 출처 표기 의무 없음)임을 확인했어요. Unsplash+(유료) 사진은 쓰지 않았어요.
라이선스 전문: https://unsplash.com/license

이미지 생성 도구를 쓸 수 없어서 Unsplash 사진으로 대신했어요. 사진 속 물건은 분위기를 보여 주는 예시이고, 추천 선물과 똑같은 실제 상품은 아니에요.

| 파일 | 용도 | 사진 | 작가 |
| --- | --- | --- | --- |
| banner-gift-box.jpg (16:9) | 메인 배너 | https://unsplash.com/photos/ZLTlHeKbh04 | Ekaterina Shevchenko |
| default.jpg (1:1) | 이미지를 못 불러올 때 대신 보이는 기본 이미지 | 위와 같은 사진 | Ekaterina Shevchenko |
| candle.jpg | 향초 | https://unsplash.com/photos/q1NCOVSalOc | Ioann-Mark Kuznietsov |
| beauty.jpg | 뷰티·핸드크림 | https://unsplash.com/photos/SD4f7jBzWfE | Diana Polekhina |
| coffee.jpg | 커피·머그컵 | https://unsplash.com/photos/2dDJdOlA3CY | Nong |
| flowers.jpg | 꽃다발 | https://unsplash.com/photos/yXep6PC-qfo | Anita Austvika |
| stationery.jpg | 문구·노트·펜 | https://unsplash.com/photos/60-_Ta1Fcyk | Ella Deane |
| dessert.jpg | 디저트·초콜릿 | https://unsplash.com/photos/SAlVV13XgTo | Jessica Johnston |
| jewelry.jpg | 주얼리·액세서리 | https://unsplash.com/photos/oWFPDjxuyUM | Daihana Monares |
| home-decor.jpg | 집들이·홈 데코 | https://unsplash.com/photos/RjbO7qlC670 | James Trenda |
| plush.jpg | 인형·캐릭터 선물 | https://unsplash.com/photos/nRGiAlIjfgA | Davide Carpani |
| hero-still-life.jpg (4:5) | GIFTÉ 메인 사진 (세라믹 컵·책·향초) | https://unsplash.com/photos/xrgUCDahao4 | Jocelyn Morales |
| default-neutral.jpg (1:1) | GIFTÉ 버전의 기본 이미지 (위 사진을 1:1로 자름) | 위와 같은 사진 | Jocelyn Morales |
| birthday-cake.jpg | 생일 카테고리 | https://unsplash.com/photos/ajMlo3HQvtU | Stocker LL |

GIFTÉ 리뉴얼 뒤로는 `banner-gift-box.jpg`, `default.jpg`(분홍 리본 상자)를 화면에서 쓰지 않아요. 파일은 지우지 않고 남겨 뒀어요.

크기: 상품·카테고리용 800×800(1:1), 배너 1600×900(16:9). Unsplash 이미지 서버에서 잘라 받았어요.

---

## 카테고리 이미지 (03 카테고리 슬라이드) · `images/category/`

모두 각 사진 페이지에서 **Unsplash License**(무료)임을 확인했어요.

| 파일 | 카테고리 | 원본 사진 | 작가 |
| --- | --- | --- | --- |
| occ-birthday.jpg | 생일 | https://unsplash.com/photos/OiJDyCr3Ohk | Delfina Iacub |
| occ-anniversary.jpg | 기념일 | https://unsplash.com/photos/56PnO1-lHbs | Annie Spratt |
| occ-congrats.jpg | 취업·졸업 | https://unsplash.com/photos/60-_Ta1Fcyk | Ella Deane |
| occ-housewarming.jpg | 집들이 | https://unsplash.com/photos/-37ysvsiUbk | Diane Wuttke |
| occ-thanks.jpg | 감사 | https://unsplash.com/photos/JJeb7OHQ7a8 | Jocelyn Morales |
| occ-cheer.jpg | 응원·위로 | https://unsplash.com/photos/e6OdPHkf9yY | Jessica Fadel |

### 카테고리 이미지 교체 기준

새 사진으로 바꿀 때도 아래 조건을 모두 지켜 주세요.

**1. 라이선스**
- Unsplash License(무료) 사진만 써요. Unsplash+(유료), 출처를 알 수 없는 사진은 쓰지 않아요.
- 바꾸면 이 표에 원본 링크와 작가를 꼭 적어요.

**2. 구도와 소품**
- 주인공 소품은 1~2개. 배경은 벽, 테이블처럼 단순한 면이에요.
- 사람 얼굴, 손이 크게 나온 사진, 상표나 글자가 크게 보이는 사진, 리본처럼 장식이 많은 사진은 피해요.
- 위아래 여백이 있어 4:3으로 잘라도 주인공이 잘리지 않는 사진을 골라요.

**3. 색과 톤 (모든 카테고리 사진을 같은 값으로 맞춤)**
- 웜그레이 `#4A4540`(어두운 곳), 그레이지 `#B0AAA2`(중간), 라이트그레이 `#F0EDE8`(밝은 곳)을 잇는 색 범위로 칠해요.
- 평균 밝기 0.66, 대비(밝기 표준편차) 0.20을 목표로 맞추고, 원래 색은 6%만 남겨요.
- 결과는 평균 밝기 0.74 ± 0.01, 채도 0.04~0.05 안이면 통과예요.
- 처리 방법: 원본을 1000×750(4:3)으로 받아 6장 모두 위 값으로 똑같이 변환했어요. 사진마다 손으로 따로 보정하지 않아요.

**4. 파일**
- 1000×750 JPG, 품질 86%, 한 장 200KB 이하예요.
- 파일 이름은 `occ-카테고리ID.jpg` (`birthday`, `anniversary`, `congrats`, `housewarming`, `thanks`, `cheer`)예요.
- alt에는 상품 이름이 아니라 사진에 실제로 보이는 것을 적어요. (`app.js`의 `IMAGES.occ_*`)

**5. 교체 뒤 확인**
- PC, 모바일에서 카드 6장 모두 사진이 뜨는지 확인해요.
- 사진을 못 불러오면 기본 이미지(`default-neutral.jpg`)로 바뀌는지 확인해요.

---

## 카테고리 이미지 · 따뜻한 톤 버전 (지금 사이트에서 쓰는 사진) · `images/category/*-warm.jpg`

03 카테고리를 '이미지 + 카테고리명'만 남기는 미니멀 디자인으로 바꾸면서, 위 그레이 톤 대신 **따뜻한 자연광 톤**으로 다시 맞췄어요. 원본 사진은 위 표와 같아요 (응원·위로 사진은 카드에서 빠져 쓰지 않음). 그레이 톤 파일은 지우지 않고 남겨 뒀어요.

| 파일 | 카테고리 | 원본 사진 |
| --- | --- | --- |
| occ-birthday-warm.jpg | 생일 | https://unsplash.com/photos/OiJDyCr3Ohk |
| occ-anniversary-warm.jpg | 기념일 | https://unsplash.com/photos/56PnO1-lHbs |
| occ-housewarming-warm.jpg | 집들이 | https://unsplash.com/photos/-37ysvsiUbk |
| occ-thanks-warm.jpg | 감사 | https://unsplash.com/photos/JJeb7OHQ7a8 |
| occ-congrats-warm.jpg | 취업·졸업 | https://unsplash.com/photos/60-_Ta1Fcyk |

### 따뜻한 톤 교체 기준 (위 '카테고리 이미지 교체 기준'의 3·4번을 이 값으로 대신함)
- **비율·크기:** 3:4 세로, 750×1000 JPG, 품질 80%, 한 장 200KB 이하
- **밝기·대비:** 평균 밝기 0.70, 대비(표준편차) 0.19를 목표로 맞춤 → 결과 평균 밝기 0.71~0.72
- **색:** 원래 색을 55%만 남겨 차분하게, 빨강 ×1.035 · 파랑 ×0.93으로 살짝 따뜻하게, 가장 어두운 곳을 4% 띄워 부드럽게
- **피할 것:** 핑크가 많은 사진, 글자·상표가 크게 보이는 사진, 소품이 많은 사진
- 5장 모두 같은 값으로 한 번에 변환해요. 사진마다 따로 손보지 않아요.

---

## 기념일 사진 (SPECIAL DATES '이런 날도 다가와요') · `images/dates/`

모두 각 사진 페이지에서 **Unsplash License**(무료, Unsplash+ 아님)임을 확인했어요.

| 파일 | 기념일 | 원본 사진 | 작가 |
| --- | --- | --- | --- |
| date-valentine.jpg | 발렌타인데이 | https://unsplash.com/photos/2TN8bSoWWeA | Clint McKoy |
| date-whiteday.jpg | 화이트데이 | https://unsplash.com/photos/3bgJzhTscYg | Diana Light |
| date-parents.jpg | 어버이날 | https://unsplash.com/photos/7IUE9fTPyhk | Hanna Pysareva |
| date-teacher.jpg | 스승의 날 | https://unsplash.com/photos/X6t0EmzKjm4 | Diana Light |
| date-pepero.jpg | 빼빼로데이 | https://unsplash.com/photos/dcPNZeSY3yk | Jennifer Pallian |
| date-christmas.jpg | 크리스마스 | https://unsplash.com/photos/QmBkVA9l_yc | G (@visualsbying) |

### 처리 기준
- **비율·크기:** 4:5 세로, 750×938 JPG, 품질 80%, 한 장 200KB 이하
- **톤:** 위 '따뜻한 톤' 카테고리 사진과 같은 색 처리(원래 색 55%, 빨강 ×1.035 · 파랑 ×0.93, 가장 어두운 곳 4% 띄움)
- **밝기:** 원래 어두운 사진(초콜릿, 트리)이 뿌옇게 바래지 않도록, 목표 밝기 0.68 쪽으로 **60%만** 끌어올림 → 결과 평균 밝기 0.51~0.77
- 6장 모두 같은 값으로 한 번에 변환해요. 사진마다 따로 손보지 않아요.
