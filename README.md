# Portfolio Yujin 🎨

**나만의 이야기를 담은 웹 포트폴리오 프로젝트**

React와 Vite를 기반으로 제작된 개인 포트폴리오 웹사이트입니다.  
반응형 디자인, 부드러운 스크롤 인터랙션, 그리고 세련된 애니메이션을 통해 사용자 경험을 극대화했습니다.

---

## � 목차
- [프로젝트 개요](#-프로젝트-개요)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [섹션 구성](#-섹션-구성)
- [설치 및 실행](#-설치-및-실행)
- [빌드 및 배포](#-빌드-및-배포)
- [라이선스](#-라이선스)

---

## 🎯 프로젝트 개요

이 포트폴리오는 **프론트엔드 개발자**로서의 역량과 프로젝트 경험을 효과적으로 전달하기 위해 제작되었습니다.

### 핵심 목표
- ✅ **직관적인 UI/UX**: 한눈에 파악 가능한 정보 구조와 네비게이션
- ✅ **반응형 디자인**: 모바일, 태블릿, 데스크탑 모든 환경에서 최적화된 경험 제공
- ✅ **인터랙티브 요소**: Framer Motion을 활용한 자연스러운 애니메이션
- ✅ **성능 최적화**: Vite 기반의 빠른 빌드 및 HMR(Hot Module Replacement)

---

## ✨ 주요 기능

### 1. **반응형 레이아웃**
- 모바일 우선(Mobile-First) 설계 방식 적용
- 데스크탑, 태블릿, 모바일 등 다양한 디바이스에서 최적화된 레이아웃 제공
- SCSS Mixins를 활용한 일관된 브레이크포인트 관리

### 2. **부드러운 스크롤 경험**
- **Snap Scroll**: 데스크탑 환경에서 섹션별 스냅 스크롤 구현
- **Scroll Spy**: 현재 보고 있는 섹션에 따라 네비게이션 활성화 상태 자동 업데이트
- 부드러운 스크롤 애니메이션 (`smoothScrollTo` 유틸리티)

### 3. **인터랙티브 애니메이션**
- **Framer Motion**을 활용한 등장 애니메이션 및 페이지 전환 효과
- 호버 시 아이콘 변경 및 색상 전환 효과
- 프로젝트 카드 스택 레이아웃 및 호버 인터랙션

### 4. **프로젝트 상세 모달**
- Radix UI Dialog를 활용한 접근성 높은 모달 구현
- 프로젝트 이미지 슬라이더 (Swiper 라이브러리)
- 프로젝트 메타 정보, 기술 스택, 하이라이트 등 상세 정보 제공

### 5. **상태 관리**
- **Zustand**를 활용한 경량 전역 상태 관리
- 현재 활성화된 섹션, 프로젝트 선택 상태 등 관리

---

## 🛠 기술 스택

### **Core**
| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | 19.2.0 | UI 컴포넌트 기반 개발 |
| **Vite** | 7.2.4 | 빌드 도구 및 개발 서버 |
| **JavaScript** | ES6+ | 프로그래밍 언어 |

### **Styling & UI**
| 기술 | 버전 | 용도 |
|------|------|------|
| **SCSS** | 1.97.3 | CSS 전처리기 (변수, Mixin, 중첩 규칙) |
| **Framer Motion** | 12.29.2 | 애니메이션 및 페이지 전환 효과 |
| **Lucide React** | 0.563.0 | 아이콘 라이브러리 |
| **Radix UI** | - | 접근성 높은 UI 컴포넌트 (Dialog, Tabs 등) |
| **Swiper** | 12.1.0 | 이미지 슬라이더 |

### **State Management**
| 기술 | 버전 | 용도 |
|------|------|------|
| **Zustand** | 5.0.11 | 경량 전역 상태 관리 |

### **Development Tools**
| 기술 | 버전 | 용도 |
|------|------|------|
| **ESLint** | 9.39.1 | 코드 품질 및 스타일 검사 |
| **classnames / clsx** | - | 조건부 클래스명 관리 |

---

## 📂 프로젝트 구조

```bash
portfolio_yujin/
├── public/                    # 정적 파일 (이미지, 폰트 등)
│   └── assets/
│       ├── icons/
│       └── sections/
├── src/
│   ├── assets/                # 컴포넌트에서 import하는 이미지/아이콘
│   ├── components/            # React 컴포넌트
│   │   ├── common/            # 공통 컴포넌트 (SkillIcon 등)
│   │   ├── layout/            # 레이아웃 컴포넌트 (MainLayout, Navigation 등)
│   │   ├── sections/          # 섹션별 컴포넌트 (Home, About, Skill 등)
│   │   └── ui/                # UI 컴포넌트 (Button, Dialog 등)
│   ├── context/               # React Context (필요 시)
│   ├── data/                  # 정적 데이터 (프로젝트, 스킬 등)
│   │   ├── projects.js        # 프로젝트 데이터 (12개)
│   │   ├── skills.js          # 기술 스택 데이터
│   │   └── stackIcons.js      # 스택 아이콘 매핑
│   ├── hooks/                 # 커스텀 React Hooks
│   ├── lib/                   # 유틸리티 함수 (smoothScroll 등)
│   ├── store/                 # Zustand 스토어
│   │   └── useStore.js
│   ├── styles/                # SCSS 스타일
│   │   ├── components/        # 컴포넌트별 스타일
│   │   ├── _variables.scss    # 전역 변수 (색상, 폰트 등)
│   │   ├── _fonts.scss        # 폰트 설정
│   │   └── main.scss          # 메인 스타일 엔트리
│   ├── App.jsx                # 메인 App 컴포넌트
│   ├── main.jsx               # React 진입점
│   └── index.css              # 전역 CSS
├── .gitignore
├── package.json
├── vite.config.js             # Vite 설정
└── README.md
```

---

## � 섹션 구성

포트폴리오는 **6개의 주요 섹션**으로 구성되어 있습니다.

| 섹션 | ID | 설명 |
|------|-----|------|
| **Home** | `#home` | 메인 히어로 영역, 프로필, 주요 기술 스택 미리보기, 프로젝트 카드 스택 |
| **About** | `#about` | 자기소개, 핵심 가치 및 태그 |
| **Skill** | `#skill` | 기술 스택 상세 정보 (Language, Frontend, Tools 카테고리별) |
| **Career** | `#career` | 경력 및 교육 이력 타임라인 |
| **Project** | `#project` | 프로젝트 목록 및 상세 모달 (총 12개 프로젝트) |
| **Contact** | `#contact` | 연락처 정보 및 소셜 링크 |

### 섹션별 주요 컴포넌트

#### 1. **Home** (`src/components/sections/Home.jsx`)
- **프로필 패널**: 이름, 이메일, Resume 다운로드 버튼
- **Tools 패널**: 주요 기술 스택 아이콘 그리드 (최대 9개 + More)
- **About 패널**: 핵심 가치 태그 (#Reliable, #Creative 등)
- **Project 패널**: 프로젝트 카드 스택 레이아웃 (3개 미리보기 + MORE)

#### 2. **Skill** (`src/components/sections/Skill.jsx`)
- 카테고리별 탭 (Language, Frontend, Tools)
- 각 스킬에 대한 아이콘, 설명, 호버 효과

#### 3. **Project** (`src/components/sections/Project.jsx`)
- 프로젝트 카드 그리드 (Company / Toy 프로젝트 구분)
- Radix UI Dialog를 활용한 프로젝트 상세 모달
- Swiper를 활용한 이미지 슬라이더
- 프로젝트 메타 정보 (기술 스택, 기여도, 하이라이트 등)

---

## 🚀 설치 및 실행

### **사전 요구사항**
- Node.js 18.x 이상
- npm 또는 yarn 또는 pnpm

### **설치**
```bash
# 1. 저장소 클론
git clone https://github.com/your-username/portfolio_yujin.git

# 2. 프로젝트 폴더로 이동
cd portfolio_yujin

# 3. 패키지 설치
npm install
# or
yarn install
# or
pnpm install
```

### **개발 서버 실행**
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 접속

### **린트 검사**
```bash
npm run lint
```

---

## 📦 빌드 및 배포

### **프로덕션 빌드**
```bash
npm run build
```
빌드된 파일은 `dist/` 폴더에 생성됩니다.

### **빌드 미리보기**
```bash
npm run preview
```

### **배포**
- **Vercel**: `vercel` CLI 또는 GitHub 연동을 통한 자동 배포
- **Netlify**: `netlify deploy` 또는 드래그 앤 드롭 배포
- **GitHub Pages**: `gh-pages` 브랜치를 통한 배포

---

## 📜 라이선스

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

- **Email**: frontend-dev@email.com
- **GitHub**: [github.com/your-username](https://github.com/your-username)
- **Portfolio**: [your-portfolio-url.com](https://your-portfolio-url.com)
