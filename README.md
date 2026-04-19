# 분당 금거래소 - GitHub Pages 웹사이트

성남시 분당구 금 매입 전문점 공식 웹사이트입니다.

## 🚀 GitHub Pages 배포 방법

### 1단계: GitHub 저장소 생성
1. [github.com](https://github.com) 로그인
2. **New repository** 클릭
3. Repository name: `bundang-gold` (또는 `{username}.github.io`)
4. **Public** 선택
5. **Create repository** 클릭

### 2단계: 코드 업로드
```bash
cd ~/Desktop/bundang-gold
git init
git add .
git commit -m "초기 웹사이트 배포"
git branch -M main
git remote add origin https://github.com/{username}/bundang-gold.git
git push -u origin main
```

### 3단계: GitHub Pages 활성화
1. GitHub 저장소 → **Settings** 탭
2. 왼쪽 메뉴 **Pages** 클릭
3. Source: **Deploy from a branch**
4. Branch: **main** / **/ (root)** 선택
5. **Save** 클릭

### 4단계: 사이트 확인
- 약 1~3분 후 `https://{username}.github.io/bundang-gold/` 에서 접속 가능

---

## ✅ 배포 후 SEO 설정 (중요!)

### 네이버 서치어드바이저 등록
1. [searchadvisor.naver.com](https://searchadvisor.naver.com) 방문
2. **사이트 등록** → URL 입력
3. HTML 태그 인증 코드를 `index.html`의 `<meta name="naver-site-verification">` 에 추가

### 구글 서치콘솔 등록
1. [search.google.com/search-console](https://search.google.com/search-console) 방문
2. URL 접두사 방식으로 사이트 추가
3. HTML 태그 코드를 `index.html`의 `<meta name="google-site-verification">` 에 추가

### 사이트맵 제출
- 네이버: 서치어드바이저 → 요청 → 사이트맵 제출 → `https://{url}/sitemap.xml`
- 구글: 서치콘솔 → Sitemaps → 동일 URL 입력

---

## 📝 커스터마이징 항목

`index.html` 에서 수정할 내용:

| 항목 | 찾기 | 수정 |
|------|------|------|
| 전화번호 | `031-000-0000` | 실제 전화번호로 변경 |
| 주소 | `서현로 ○○` | 실제 주소로 변경 |
| 카카오톡 ID | `bundang-gold` | 실제 카카오 ID로 변경 |
| 지도 링크 | 네이버 지도 URL | 실제 매장 네이버 지도 링크로 변경 |
| GitHub URL | `bundang-gold.github.io` | 실제 GitHub Pages URL로 변경 |

---

## 📄 라이선스

HTML5 UP 템플릿 기반 ([Creative Commons Attribution 3.0](https://html5up.net/license))
