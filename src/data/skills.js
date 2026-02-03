// Language
import html5 from '@/assets/icons/default/html5.svg'
import html5Hover from '@/assets/icons/hover/html5.svg'
import css3 from '@/assets/icons/default/css3.svg'
import css3Hover from '@/assets/icons/hover/css3.svg'
import js from '@/assets/icons/default/js.svg'
import jsHover from '@/assets/icons/hover/js.svg'
import ts from '@/assets/icons/default/ts.svg'
import tsHover from '@/assets/icons/hover/ts.svg'

// Front
import reactIcon from '@/assets/icons/default/react.svg'
import reactHover from '@/assets/icons/hover/react.svg'
import buildTools from '@/assets/icons/default/build-tools.svg'
import buildToolsHover from '@/assets/icons/hover/build-tools.svg'
import scss from '@/assets/icons/default/scss.svg'
import scssHover from '@/assets/icons/hover/scss.svg'
import nextjs from '@/assets/icons/default/next.svg'
import nextjsHover from '@/assets/icons/hover/next.svg'
import tailwind from '@/assets/icons/default/tailwind.svg'
import tailwindHover from '@/assets/icons/hover/tailwind.svg'
import zustand from '@/assets/icons/default/zustand.svg'
import zustandHover from '@/assets/icons/hover/zustand.svg'

// Tool
import figma from '@/assets/icons/default/figma.svg'
import figmaHover from '@/assets/icons/hover/figma.svg'
import ps from '@/assets/icons/default/ps.svg'
import psHover from '@/assets/icons/hover/ps.svg'
import ai from '@/assets/icons/default/ai.svg'
import aiHover from '@/assets/icons/hover/ai.svg'
import git from '@/assets/icons/default/git.svg'
import gitHover from '@/assets/icons/hover/git.svg'
import vscode from '@/assets/icons/default/vscode.svg'
import vscodeHover from '@/assets/icons/hover/vscode.svg'

export const skills = [
    // Language
    {
        id: 'html5',
        key: 'HTML5',
        label: 'HTML5',
        category: 'language',
        desc: '시맨틱 마크업과 웹 접근성을 준수하여 구조적인 웹 페이지를 설계합니다.',
        featured: false,
        icon: html5,
        hoverIcon: html5Hover
    },
    {
        id: 'css3',
        key: 'CSS3',
        label: 'CSS3',
        category: 'language',
        desc: 'Flex/Grid를 활용한 레이아웃 설계 및 다양한 디바이스에 대응하는 반응형 웹을 구현합니다.',
        featured: true,
        icon: css3,
        hoverIcon: css3Hover
    },
    {
        id: 'js',
        key: 'JavaScript (ES6+)',
        label: 'JavaScript',
        category: 'language',
        desc: 'ES6+ 문법을 적극 활용하며, 비동기 통신 및 DOM 조작을 효율적으로 처리합니다.',
        featured: true,
        icon: js,
        hoverIcon: jsHover
    },
    {
        id: 'ts',
        key: 'TypeScript',
        label: 'TypeScript',
        category: 'language',
        desc: '정적 타입을 도입하여 런타임 오류를 방지하고 유지보수성을 높인 코드를 작성합니다.',
        featured: true,
        icon: ts,
        hoverIcon: tsHover
    },

    // Front
    {
        id: 'react',
        key: 'React',
        label: 'React',
        category: 'front',
        desc: 'Hooks와 컴포넌트 생명주기를 이해하고, 재사용 가능한 UI 컴포넌트를 설계합니다.',
        featured: true,
        icon: reactIcon,
        hoverIcon: reactHover
    },
    {
        id: 'gulp-webpack',
        key: 'Build Tools',
        label: 'Build Tools',
        category: 'front',
        desc: 'Vite, Webpack 등 번들러 환경을 최적화하고 개발 효율을 높이는 설정을 관리합니다.',
        featured: true,
        icon: buildTools,
        hoverIcon: buildToolsHover
    },
    {
        id: 'scss',
        key: 'SCSS',
        label: 'SCSS',
        category: 'front',
        desc: '변수, Mixin, 중첩 규칙을 활용하여 스타일 코드의 재사용성과 가독성을 높입니다.',
        featured: false,
        icon: scss,
        hoverIcon: scssHover
    },
    {
        id: 'nextjs',
        key: 'Next.js',
        label: 'Next.js',
        category: 'front',
        desc: 'SSR과 SSG를 이해하고 SEO 친화적인 웹 애플리케이션을 구축합니다.',
        featured: true,
        icon: nextjs,
        hoverIcon: nextjsHover
    },
    {
        id: 'tailwind',
        key: 'Tailwind CSS',
        label: 'Tailwind CSS',
        category: 'front',
        desc: 'Utility-First 접근 방식으로 빠르고 일관된 스타일링을 구현합니다.',
        featured: true,
        icon: tailwind,
        hoverIcon: tailwindHover
    },
    {
        id: 'zustand',
        key: 'Zustand',
        label: 'Zustand',
        category: 'front',
        desc: '간결한 Flux 패턴으로 전역 상태를 효율적으로 관리합니다.',
        featured: false,
        icon: zustand,
        hoverIcon: zustandHover
    },

    // Tool
    {
        id: 'figma',
        key: 'Figma',
        label: 'Figma',
        category: 'tool',
        desc: '디자인 시안을 정확하게 코드로 구현하며, 디자이너와의 원활한 협업이 가능합니다.',
        featured: true,
        icon: figma,
        hoverIcon: figmaHover
    },
    {
        id: 'ps',
        key: 'Photoshop',
        label: 'Photoshop',
        category: 'tool',
        desc: '이미지 편집 및 보정을 수행하고, 다양한 디자인 포맷을 웹 환경에 맞게 최적화합니다.',
        featured: true,
        icon: ps,
        hoverIcon: psHover
    },
    {
        id: 'ai',
        key: 'Illustrator',
        label: 'Illustrator',
        category: 'tool',
        desc: '벡터 기반의 아이콘 및 로고를 제작하고 SVG를 최적화하여 웹에 적용합니다.',
        featured: true,
        icon: ai,
        hoverIcon: aiHover
    },
    {
        id: 'git',
        key: 'Git/GitHub',
        label: 'Git/GitHub',
        category: 'tool',
        desc: 'Git Flow 브랜치 전략을 이해하고, Pull Request 기반의 코드 리뷰와 협업을 진행합니다.',
        featured: true,
        icon: git,
        hoverIcon: gitHover
    },
    {
        id: 'vscode',
        key: 'VS Code',
        label: 'VS Code',
        category: 'tool',
        desc: '다양한 확장 프로그램과 단축키를 활용하여 개발 생산성을 극대화합니다.',
        featured: false,
        icon: vscode,
        hoverIcon: vscodeHover
    }
]
