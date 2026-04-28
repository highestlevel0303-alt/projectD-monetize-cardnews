# projectD-monetize · 인스타 카드뉴스 12장 템플릿

받아서 명령어 한 줄이면 **카드뉴스 12장 PNG**가 나옵니다.

## 사용법

```bash
npm install
node convert-projectD-monetize.mjs
```

→ `projectD-monetize-01.png` ~ `projectD-monetize-12.png` 12장 출력.

## 본인 버전으로 바꾸기

`projectD-monetize-01.html` 한 파일만 편집.

- 텍스트: 슬라이드별 제목·본문 직접 수정
- 이미지: 폴더 내 `.jpg`/`.png` 파일을 본인 이미지로 교체 (파일명 동일 유지하거나 `<img src=...>` 변경)
- 인스타 핸들: `@highestlevel33` → 본인 핸들로 일괄 치환

저장 후 다시 `node convert-projectD-monetize.mjs` 실행.

## 규격

- 1080 × 1350 (인스타 4:5)
- 2x DPR PNG · puppeteer 렌더
- 폰트: Noto Sans KR
