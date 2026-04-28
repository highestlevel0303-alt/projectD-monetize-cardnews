# 🎨 템플릿 사용 가이드 — 다운로드 → 적용 → 본인 버전

이 폴더 그대로 받으시면 **마크 저커버그 카드뉴스 12장**이 나옵니다.
본인 카드뉴스로 바꾸시려면 아래 **6곳만** 수정하면 됩니다.

---

## PART 1 · 그대로 사용 (3분)

```bash
git clone https://github.com/highestlevel0303-alt/projectD-monetize-cardnews.git
cd projectD-monetize-cardnews
npm install
node convert-projectD-monetize.mjs
```

→ `projectD-monetize-01.png` ~ `projectD-monetize-12.png` **12장 자동 출력**.
→ 인스타 새 게시물 → 12장 그대로 드래그 → 끝.

**MP4 캐러셀로도 출력하고 싶으면:**
```bash
ffmpeg -framerate 0.4 -pattern_type glob \
  -i "projectD-monetize-*.png" \
  -c:v libx264 -vf "fps=30,format=yuv420p" \
  projectD-monetize-reel.mp4
```

---

## PART 2 · 본인 카드뉴스로 변형 (15분)

`projectD-monetize-01.html` 한 파일만 편집하면 됩니다. 6곳만.

### ① 브랜드 네이밍 (전 슬라이드)

찾기: `@highestlevel33`
바꾸기: 본인 인스타 핸들 (예: `@yourhandle`)
→ 메모장 Ctrl+H로 일괄 치환

### ② 커버 헤드라인 (1번 슬라이드)

찾기:
```html
<div class="cover-headline">팔로워 500명부터<br>인스타가 돈 준다</div>
```
바꾸기: 본인 훅 문구로
→ **2줄 헤드** 유지 (디자인 영구지침)
→ `<br>` 줄바꿈 위치 직접 지정

**디자인 영구지침 (변경 금지):**
- `top: 73%` (위치)
- `font-size: 94px`
- `letter-spacing: -4px`
- `font-weight: 900`

### ③ 커버 사진 (1번 슬라이드)

찾기: `src="zuckerberg-portrait-hd.jpg"`
바꾸기: 본인 사진 또는 본인 주제 인물 사진
→ 폴더에 **같은 파일명**으로 넣거나 src 값 변경
→ HD 포트레이트 (1080×1350 비율 권장)

**이미지 위치 조정:**
```css
.cover-photo {
  object-fit: cover;
  object-position: center 30%;  /* 얼굴 위쪽 살리기 */
}
```

### ④ 본문 10장 카피 (2~11번 슬라이드)

각 슬라이드 구조:
```html
<div class="slide mag">
  <div class="mag-header">
    <span class="mag-badge">#01 THE SHIFT</span>          <!-- 카테고리 배지 -->
    <span class="mag-brand">@highestlevel33</span>
  </div>
  <div class="mag-photo"><img src="이미지.jpg"></div>
  <div class="mag-text">
    <div class="mag-section">왜 지금 · 2026</div>          <!-- 섹션 라벨 -->
    <div class="mag-divider"></div>
    <div class="mag-title">Meta가 작년<br>크리에이터에게 4조원</div>  <!-- 본문 소제목 -->
    <div class="mag-body">
      <p>본문 내용. <b>강조</b>는 b 태그.<br>
      <span class="hl">핑크 강조</span>는 hl 클래스.</p>
    </div>
    <div class="mag-source">출처 · about.fb.com 2026-03</div>  <!-- 출처 -->
  </div>
  <div class="mag-watermark">🔖 저장 · @highestlevel33</div>
</div>
```

**바꿀 곳:**
- `mag-badge`: 카테고리 (예: `#01 THE SHIFT` → `#01 시작`)
- `mag-section`: 섹션 라벨 (예: `왜 지금 · 2026`)
- `mag-title`: 본문 소제목 (52px · 2줄 유지)
- `mag-body`: 본문 내용 (27px · 3문단 이내)
- `mag-source`: 출처 (필수)
- 이미지 src: 슬라이드별 매칭 이미지

**디자인 영구지침 (변경 금지):**
- `.mag-photo` 높이: `48%`
- `.mag-title` 폰트: `52px / 900 / 1.18`
- `.mag-body` 폰트: `27px / 1.58`
- `.hl` 컬러: `#E1306C` (인스타 핑크)

### ⑤ 영상 슬라이드 (#02 CEO SPEAKS · 선택)

영상 슬라이드 구조:
```html
<div class="slide mag has-video">
  <div class="mag-photo video-photo">
    <video src="yt-fb-fasttrack-clip.mp4"
           poster="meta-fast-track-hero.jpg"
           autoplay muted loop playsinline></video>
    <div class="video-play-indicator">OFFICIAL · META</div>
  </div>
  ...
</div>
```

**바꿀 곳:**
- `video src`: 본인 영상 파일 (mp4, 5~15초 권장)
- `poster`: 영상 썸네일 이미지
- `video-play-indicator` 텍스트: 출처 라벨

**주의:**
- `autoplay muted loop playsinline` 4종 세트 필수 (인스타 자동재생 호환)
- 영상 파일 50MB 이하 권장

### ⑥ CTA 슬라이드 (12번)

```html
<div class="slide cta">
  <div class="cta-brand">@highestlevel33</div>
  <div class="cta-head">인스타 수익화 세팅<br>알고 싶다면?</div>
  <div class="cta-sub-line">무료강의에서 6가지 전부 알려드립니다</div>
  <div class="cta-keyword">댓글에 "최고수준"</div>
  <div class="cta-dm-line">DM으로 무료강의 링크 바로 보내드립니다</div>
</div>
```

**바꿀 곳:**
- `cta-brand`: 본인 인스타 핸들
- `cta-head`: 메인 CTA 헤드
- `cta-sub-line`: 부제 (한 줄)
- `cta-keyword`: 댓글 키워드 (단어 1~3개)
- `cta-dm-line`: DM 안내 한 줄

**디자인 영구지침:**
- 인스타 그라디언트 `#E1306C → #C13584 → #833AB4` 변경 금지
- `cta-keyword` 폰트: `32px / 900` · 흰색 박스 + 핑크 텍스트

---

## PART 3 · 디자인 영구지침 정리

이 값들은 **카드뉴스 시리즈 일관성·캐러셀 완주율** 검증된 값입니다. 변경 금지.

| 영역 | 속성 | 값 |
|---|---|---|
| 슬라이드 박스 | width × height | `1080px × 1350px` (인스타 4:5) |
| 폰트 | font-family | `Noto Sans KR` (300~900) |
| 패딩 | --pad | `64px` |
| 컬러 핑크 | --accent | `#E1306C` |
| 컬러 핑크 연 | --accent-soft | `#FCE4EC` |
| **커버 헤드라인** | top | `73%` |
| **커버 헤드라인** | font-size | `94px` |
| **커버 헤드라인** | letter-spacing | `-4px` |
| **커버 헤드라인** | line-height | `1.12` |
| 본문 사진 영역 | height | `48%` |
| **본문 소제목** (.mag-title) | font-size | `52px` |
| **본문 소제목** (.mag-title) | font-weight | `900` |
| **본문 소제목** (.mag-title) | line-height | `1.18` |
| **본문 내용** (.mag-body) | font-size | `27px` |
| **본문 내용** (.mag-body) | line-height | `1.58` |
| 본문 강조 | .hl color | `#E1306C` |
| CTA 그라디언트 | 4컬러 | `#F77737 → #E1306C → #C13584 → #833AB4` |
| CTA 키워드 박스 | font-size | `32px` |
| CTA 키워드 박스 | padding | `22px 56px` |
| CTA 키워드 박스 | border-radius | `50px` |

---

## PART 4 · 카피 작성 영구지침

| 규칙 | 좋은 예 | 나쁜 예 |
|---|---|---|
| 금액 단위 | "5만원" / "1,100만원" / "1조원" | "5만" / "1,100만" / "1조" |
| 팔로워 표기 | "팔로워 500명" / "10만 팔로워" | "500팔" / "10만팔" |
| 줄바꿈 | `<br>` 명시적 사용 | 자연 줄바꿈 의존 X |
| 강조 | `<b>` (검정) + `.hl` (핑크) 1~2개 | 강조 3개 이상 (시선 분산) |
| 구분선 | 빈 줄 + 이모지로 구분 | `⸻` `---` `———` 절대 X |
| 출처 | `mag-source`에 1차 출처 명시 | 출처 없이 수치만 |
| 마침표 | 본문 문장만 마침표 | 슬라이드 제목·소제목엔 마침표 X |

---

## PART 5 · 출력 옵션

### A. PNG 12장 (인스타 캐러셀 기본)
```bash
node convert-projectD-monetize.mjs
```
→ `projectD-monetize-{01..12}.png` · 1080×1350 · 2x DPR

### B. MP4 캐러셀 (릴스/스토리용)
```bash
ffmpeg -framerate 0.4 -pattern_type glob \
  -i "projectD-monetize-*.png" \
  -c:v libx264 -vf "fps=30,format=yuv420p" \
  -movflags +faststart projectD-monetize-reel.mp4
```
→ 1장당 2.5초 × 12장 = 30초 mp4

**프레임 시간 조정:**
- `0.4` (2.5초/장) · 기본
- `0.5` (2초/장) · 빠르게
- `0.33` (3초/장) · 천천히

### C. 카드뉴스 1장만 GIF
```bash
ffmpeg -i projectD-monetize-01.png -vf "fps=10,scale=540:-1" preview.gif
```

---

## PART 6 · FAQ

### Q. 이미지 비율이 안 맞아요
**A.** `object-fit: cover` + `object-position: center 30%`로 자동 크롭. 인물은 얼굴 위쪽 살리려고 30% 사용.

### Q. 한글 폰트가 깨져요
**A.** `<head>`에 Google Fonts 로드되어 있는지 확인:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Q. PNG 화질이 떨어져요
**A.** `convert-projectD-monetize.mjs`의 `deviceScaleFactor: 2` 확인. 이게 레티나 2x DPR.

### Q. 본문이 길어서 잘려요
**A.** `.mag-body` 영역은 카드 하단 52% 영역. `mag-title` + `mag-body` + `mag-source` 합쳐서 3문단 이내가 안전.

### Q. 영상 슬라이드 인스타에서 자동재생 안 돼요
**A.** `<video>` 태그에 `autoplay muted loop playsinline` 4종 세트 모두 있는지 확인. `muted` 빠지면 모바일 자동재생 차단됨.

---

## 🎯 변형 체크리스트

본인 버전 만들 때 이 순서로:

- [ ] **① 브랜드** `@highestlevel33` → 본인 핸들 (Ctrl+H 일괄 치환)
- [ ] **② 커버 사진** 교체 (`zuckerberg-portrait-hd.jpg` → 본인 사진)
- [ ] **③ 커버 헤드라인** 2줄 작성
- [ ] **④ 본문 10장** 카피 작성 (badge·title·body·source)
- [ ] **⑤ 본문 이미지** 10장 매칭 (1:1 매칭, 재사용 X)
- [ ] **⑥ CTA 키워드** 변경 (`최고수준` → 본인 키워드)
- [ ] **(선택) 영상 슬라이드** mp4 교체
- [ ] PNG 출력: `node convert-projectD-monetize.mjs`
- [ ] (선택) MP4 출력: `ffmpeg ...`
- [ ] 인스타 업로드

---

@highestlevel33 · projectD-monetize 시리즈 · Claude Code 워크플로우
