# projectD-monetize · 60만뷰 인스타 수익화 카드뉴스

@highestlevel33 인스타 수익화 카드뉴스 12장 (마크 저커버그 버전).
이 폴더 그대로 받아서 명령어 한 줄만 실행하면 **똑같은 12장 PNG**가 나옵니다.

---

## 📦 풀 패키지

이 repo에는 **무료강의 시연용 풀 패키지**가 다 들어있습니다:

| 파일 | 용도 |
|---|---|
| **`projectD-monetize-FINAL.mp4`** (27MB) | 메인 시연 영상 — Claude Code로 만든 흐름 1부터 10까지 |
| **`projectD-monetize-FULL-TUTORIAL.mp4`** (12MB) | 따라하기 영상 — 7단계 STEP-BY-STEP |
| **`LIVE_TUTORIAL.md`** | 강의 시연 스크립트 — 강사가 라이브에서 그대로 보고 시연 |
| **`PROMPT.md`** | 마스터 프롬프트 — 자기 버전 만들기용 |
| **`projectD-monetize-01.html`** | 12장 슬라이드 메인 HTML |
| **`convert-projectD-monetize.mjs`** | puppeteer PNG 12장 자동 렌더 |
| 이미지 11종 | 저커버그·Mosseri·Meta·TechCrunch 등 |

---

## 사용법 (3분 컷)

### 1. 다운로드

```bash
git clone https://github.com/highestlevel0303-alt/projectD-monetize-cardnews.git
cd projectD-monetize-cardnews
```

또는 GitHub 페이지에서 **Code → Download ZIP** 으로 받으면 됩니다.

### 2. 의존성 설치

```bash
npm install
```

### 3. PNG 12장 출력

```bash
node convert-projectD-monetize.mjs
```

→ `projectD-monetize-01.png` ~ `projectD-monetize-12.png` 12장이 같은 폴더에 생성됩니다.

### 4. 인스타 캐러셀 업로드

새 게시물 만들기 → 12장 PNG 그대로 드래그 → 게시.

---

## 파일 구조

```
projectD-monetize-cardnews/
├── projectD-monetize-01.html        ← 12장 슬라이드가 들어있는 메인 HTML
├── convert-projectD-monetize.mjs    ← puppeteer 1080×1350 2x DPR 캡처 스크립트
├── package.json                      ← puppeteer 의존성
├── README.md
├── PROMPT.md                         ← 마스터 프롬프트 (자기 버전 만들고 싶을 때)
│
├── zuckerberg-portrait-hd.jpg       ← 1번 커버
├── meta-fast-track-hero.jpg         ← #01 SHIFT
├── yt-fb-fasttrack-clip.mp4         ← #02 CEO SPEAKS (영상)
├── tc-instagram-gifts.png           ← #03 GIFTS
├── tc-fb-phone.jpg                  ← #04 BONUS
├── ig-creator-skylar.jpg            ← #05 MARKETPLACE
├── ig-subs-creator.jpg              ← #06 10K+ TIER
├── shopify-influencer-formula.png   ← #07 NICHE CPM
├── mosseri-portrait-hd.jpg          ← #08 ALGORITHM
├── smt-hashtag-limit.jpg            ← #09 POLICY
└── highestlevel33_*.jpg             ← #10 KOREA
```

---

## 12장 구조

| # | 슬라이드 | 핵심 메시지 |
|---|---|---|
| 1 | 커버 | 팔로워 500명부터 인스타가 돈 준다 |
| 2 | #01 THE SHIFT | Meta가 작년 크리에이터에게 4조원 |
| 3 | #02 CEO SPEAKS | 팔로워 10만 = 매달 140만원 (Creator Fast Track) |
| 4 | #03 GIFTS | 팔로워 500명 즉시 수익화 (스타 1개 = 13원) |
| 5 | #04 REELS BONUS | 릴스 하나로 1,100만원 받은 사례 |
| 6 | #05 MARKETPLACE | 브랜드 딜 6,600만원 (최대 400배 차이) |
| 7 | #06 10K+ TIER | 1만팔 = 구독·광고분배·라이브배지 3가지 추가 |
| 8 | #07 NICHE CPM | 주제별 CPM 20배 차이 (돈/투자가 음식의 20배) |
| 9 | #08 ALGORITHM | Mosseri 알고리즘 5요소 (DM 공유 1등) |
| 10 | #09 POLICY | 해시태그 5개 제한 + 재업 페널티 |
| 11 | #10 KOREA | 한국 인스타 2,400만 · 시장 6,500억 → 1조원+ |
| 12 | CTA | 댓글 "최고수준" → DM 무료강의 |

---

## 디자인 영구지침 (변경 금지)

- 슬라이드 박스: **1080 × 1350** (인스타 4:5)
- 커버 헤드라인: `top: 73%` · `font-size: 94px` · `letter-spacing: -4px`
- 본론 매거진: 사진 48% + 본문 52%
- 인스타 그라디언트: `#E1306C → #C13584 → #833AB4`
- 폰트: Noto Sans KR · 금액에 "원" 필수 · "팔" 줄임 금지 · 구분선 금지

---

## 카피·내용 수정하고 싶으면

`projectD-monetize-01.html` 직접 편집 후 다시 `node convert-projectD-monetize.mjs` 실행.
또는 `PROMPT.md`의 마스터 프롬프트를 Claude Code에 붙여넣어 자기 버전 만들기.

---

## 출처

- Meta 공식: https://about.fb.com/news/2026/03/creator-fast-track/
- Instagram Creators: https://creators.instagram.com/earn-money
- TechCrunch: https://techcrunch.com/instagram-gifts
- InterAd 한국 리포트: https://www.interad.com/en/insights/influencer-marketing-in-korea
- @mosseri 알고리즘 메모

---

## License

이미지 자료는 각 출처(공식 자료/뉴스 매체)에 귀속됩니다.
HTML/CSS/JS 코드는 자유롭게 수정·재사용 가능합니다.

@highestlevel33 · 인스타 수익화 카드뉴스 시리즈
