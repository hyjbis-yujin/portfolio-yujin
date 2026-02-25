// Removed static logo imports - using dynamic public paths instead

export const projects = [
  // --- Company Projects ---
  {
    id: 1,
    type: "Company",
    title: "중앙청소년유해환경감시단",
    desc: "청소년 보호 및 유해환경 감시를 위한 공식 웹사이트 및 관리 시스템.",
    tags: ["React", "Node.js", "MongoDB"],
    logo: "/images/projects/logos/yhewg-logo.png",
    screenshots: [
      "/images/projects/yhewg/1.jpg",
      "/images/projects/yhewg/2.jpg",
      "/images/projects/yhewg/3.jpg",
      "/images/projects/yhewg/4.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "공공 서비스",
      scale: "관공서 프로젝트",
      contribution: "디자인 80% / 개발 100%",
      stack: "React, Node.js",
      framework: "Express",
      library: "Mongoose",
    },
    highlights: [
      "청소년 보호 및 감시단 활동 홍보",
      "전국 감시단 관리 및 보고 시스템 구축",
      "반응형 웹 및 사용자 권한 관리 구현",
    ],
  },
  {
    id: 2,
    type: "Company",
    title: "아이제스트",
    desc: "차세대 고감도 반도체 기반 진단 기기 및 데이터 분석 플랫폼.",
    tags: ["Vue", "D3.js", "Firebase"],
    logo: "/images/projects/logos/igest-logo.png",
    screenshots: [
      "/images/projects/igest/1.jpg",
      "/images/projects/igest/2.jpg",
      "/images/projects/igest/3.jpg",
      "/images/projects/igest/4.jpg",
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "바이오테크 플랫폼",
      scale: "기업 프로젝트",
      contribution: "프론트엔드 100%",
      stack: "Vue.js, Firebase",
      framework: "Vuex",
      library: "D3.js",
    },
    highlights: [
      "진단 데이터 실시간 시각화 대시보드",
      "다국어 지원 및 직관적인 데이터 표현",
      "사용자 친화적인 UI/UX 설계",
    ],
  },
  {
    id: 3,
    type: "Company",
    title: "네이처이앤티 신문고",
    desc: "윤리경영 실천을 위한 부정/비리 제보 및 익명 신고 시스템.",
    tags: ["HTML", "SCSS", "Javascript"],
    logo: "/images/projects/logos/logo-buff.png",
    screenshots: [
      "/images/projects/nature/1.jpg",
      "/images/projects/nature/2.jpg",
      "/images/projects/nature/3.jpg",
      "/images/projects/nature/4.jpg",
      "/images/projects/nature/5.jpg",
      "/images/projects/nature/6.jpg",
      "/images/projects/nature/7.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "제보 시스템",
      scale: "기업 프로젝트",
      contribution: "전체 100%",
      stack: "HTML5, SCSS, JS",
      framework: null,
      library: null,
    },
    highlights: [
      "익명성 보장을 위한 보안 프로세스 구축",
      "제보 접수 및 처리 현황 조회 기능",
      "신뢰감을 주는 기업 아이덴티티 디자인",
    ],
  },
  {
    id: 4,
    type: "Company",
    title: "선린대학교 취업창업지원센터",
    desc: "학생들의 취업 및 창업을 지원하기 위한 통합 정보 제공 센터.",
    tags: ["Project Info", "TBD"],
    logo: "/images/projects/logos/sunlin-logo.png",
    screenshots: [
      "/images/projects/sunlin/1.jpg",
      "/images/projects/sunlin/2.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "대학 기관 웹사이트",
      scale: "교육 기관",
      contribution: "참여도 작성 필요",
      stack: "기술 스택 작성 필요",
      framework: null,
      library: null,
    },
    highlights: [
      "취업/창업 정보의 체계적인 분류",
      "학생 맞춤형 정보 제공 및 UX 개선",
    ],
  },
  {
    id: 5,
    type: "Company",
    title: "나주문화재단",
    desc: "지역 문화 예술 진흥과 시민 문화 향유를 위한 재단 공식 홈페이지.",
    tags: ["Project Info", "TBD"],
    logo: "/images/projects/logos/naju-logo.png",
    screenshots: [
      "/images/projects/naju/1.jpg",
      "/images/projects/naju/2.jpg",
      "/images/projects/naju/3.jpg",
      "/images/projects/naju/4.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "공공 기관 웹사이트",
      scale: "재단 프로젝트",
      contribution: "참여도 작성 필요",
      stack: "기술 스택 작성 필요",
      framework: null,
      library: null,
    },
    highlights: [
      "문화 행사 및 프로그램 정보 전달",
      "시민 참여 및 예약 시스템 구축",
    ],
  },

  // --- Personal Projects ---
  {
    id: 6,
    type: "Personal",
    title: "BUFF",
    desc: "개인 프로젝트 BUFF에 대한 설명입니다.",
    tags: ["Personal", "Project"],
    logo: "/images/projects/logos/logo-buff.png",
    screenshots: [
      "/images/projects/buff/1.png"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "개인 프로젝트",
      scale: "개인",
      contribution: "100%",
      stack: "기술 스택 작성 필요",
      framework: null,
      library: null,
    },
    highlights: [
      "BUFF 프로젝트의 특징 1",
      "BUFF 프로젝트의 특징 2",
    ],
  },
  {
    id: 7,
    type: "Personal",
    title: "여행관리시스템", // New Entry
    desc: "여행 일정 계획 및 경비 관리를 위한 원스톱 솔루션.",
    tags: ["React", "Maps API", "TBD"],
    logo: "/images/projects/logos/logo-buff.png",
    screenshots: [
      "/images/projects/travel/1.png"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "여행 플랫폼",
      scale: "개인 프로젝트",
      contribution: "100%",
      stack: "React, Google Maps",
      framework: null,
      library: null,
    },
    highlights: [
      "지도 API를 활용한 여행 경로 시각화",
      "실시간 경비 지출 내역 관리 기능",
    ],
  },
  {
    id: 8,
    type: "Personal",
    title: "챌린저모임",
    desc: "목표 달성을 위한 그룹 챌린지 및 습관 형성 커뮤니티.",
    tags: ["Community", "Challenge"],
    logo: "/images/projects/logos/logo-buff.png",
    screenshots: [
      "/images/projects/challenger/1.png"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "커뮤니티 플랫폼",
      scale: "개인/팀 프로젝트",
      contribution: "기여도 작성 필요",
      stack: "기술 스택 작성 필요",
      framework: null,
      library: null,
    },
    highlights: [
      "그룹 챌린지 및 습관 형성 시스템",
      "활동 기록 및 통계 기능",
    ],
  },
  {
    id: 9,
    type: "Personal",
    title: "2026 포트폴리오",
    desc: "현재 작업 중인 포트폴리오 사이트 (본 사이트).",
    tags: ["React", "Interactive", "Portfolio"],
    logo: "/images/projects/logos/portfolio2026-logo.png",
    screenshots: [
      "/images/projects/portfolio2026/1.jpg",
      "/images/projects/portfolio2026/2.jpg",
      "/images/projects/portfolio2026/3.jpg",
      "/images/projects/portfolio2026/4.jpg",
      "/images/projects/portfolio2026/5.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "포트폴리오",
      scale: "개인 프로젝트",
      contribution: "100%",
      stack: "React, Framer Motion",
      framework: "Vite",
      library: "SCSS",
    },
    highlights: [
      "인터랙티브 애니메이션 및 모던 UI",
      "반응형 레이아웃 및 UX 최적화",
    ],
  },
  {
    id: 10,
    type: "Personal",
    title: "2022 포트폴리오",
    desc: "이전 버전의 개인 포트폴리오 웹사이트 아카이브.",
    tags: ["Archive", "Portfolio"],
    logo: "/images/projects/logos/portfolio2022-logo.png",
    screenshots: [
      "/images/projects/portfolio2022/1.jpg",
      "/images/projects/portfolio2022/2.jpg",
      "/images/projects/portfolio2022/3.jpg",
      "/images/projects/portfolio2022/4.jpg",
      "/images/projects/portfolio2022/5.jpg",
      "/images/projects/portfolio2022/6.jpg",
      "/images/projects/portfolio2022/7.jpg",
      "/images/projects/portfolio2022/8.jpg",
      "/images/projects/portfolio2022/9.jpg"
    ],
    links: { git: "#", demo: "#" },
    meta: {
      main: "포트폴리오",
      scale: "개인 프로젝트",
      contribution: "100%",
      stack: "기술 스택 작성 필요",
      framework: null,
      library: null,
    },
    highlights: [
      "2022년 디자인 및 기술 스택 아카이브",
      "개인 브랜딩 및 포트폴리오 관리",
    ],
  },
];
