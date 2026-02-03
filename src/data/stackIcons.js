import { Figma, Database, Layout, Smartphone, Atom, FileCode, Check, Globe, Palette, Code2, Monitor } from 'lucide-react'

// Single Source of Truth for Stack Icons
// types: 'class' (SCSS background-image), 'icon' (Lucide Component), 'text' (Styled Text)

export const STACK_ICONS = {
    // Design Tools
    'Ai': {
        type: 'class',
        className: 'tool-ai',
        label: 'Illustrator'
    },
    'Figma': {
        type: 'icon',
        component: Figma,
        color: '#BEBEBE',
        label: 'Figma'
    },
    'Photoshop': {
        type: 'icon',
        component: Palette,
        color: '#BEBEBE',
        label: 'Photoshop'
    },

    // Development (Code)
    'HTML5': {
        type: 'text',
        label: 'HTML',
        className: 'tool-label'
    },
    'CSS': {
        type: 'text',
        label: 'CSS',
        className: 'tool-label'
    },
    'CSS3': {
        type: 'text',
        label: 'CSS',
        className: 'tool-label'
    }, // Alias for consistency
    'JavaScript': {
        type: 'text',
        label: 'JS',
        className: 'tool-label'
    },
    'JavaScript (ES6+)': {
        type: 'text',
        label: 'JS',
        className: 'tool-label'
    }, // Alias
    'TypeScript': {
        type: 'text',
        label: 'TS',
        className: 'tool-label'
    },
    'React': {
        type: 'text',
        label: 'React',
        className: 'tool-label'
    },

    // Tools / Infra
    'Gulp/Webpack': {
        type: 'icon',
        component: FileCode,
        color: '#BEBEBE',
        label: 'Build Tools'
    },
    'SCSS': {
        type: 'text',
        label: 'SCSS',
        className: 'tool-label'
    },
    'Git/GitHub': {
        type: 'icon',
        component: Code2, // Placeholder for Git
        color: '#BEBEBE',
        label: 'Git'
    },
    'VS Code': {
        type: 'icon',
        component: Monitor, // Placeholder
        color: '#BEBEBE',
        label: 'VS Code'
    },

    // Placeholders used in Home
    'Layout': {
        type: 'icon',
        component: Layout,
        color: '#BEBEBE',
        label: 'Layout'
    },
    'Smartphone': {
        type: 'icon',
        component: Smartphone,
        color: '#BEBEBE',
        label: 'Mobile'
    },
    'Database': {
        type: 'icon',
        component: Database,
        color: '#BEBEBE',
        label: 'DB'
    },

    // Aliases & Missing Keys
    'Illustrator': {
        type: 'class',
        className: 'tool-ai',
        label: 'Illustrator'
    },
    'Build Tools': {
        type: 'icon',
        component: FileCode,
        color: '#BEBEBE',
        label: 'Build Tools'
    },
    'Next.js': {
        type: 'text',
        label: 'Next.js',
        className: 'tool-label'
    },
    'Tailwind CSS': {
        type: 'text',
        label: 'Tailwind',
        className: 'tool-label'
    },
    'Zustand': {
        type: 'text',
        label: 'Zustand',
        className: 'tool-label'
    }
}
