# Portfolio Yujin

Welcome to my personal portfolio repository! This project showcases my skills, career journey, and development projects in a modern, interactive web application.

## 🚀 Overview

This portfolio is designed to provide an engaging user experience with features like full-page snap scrolling and interactive modals. It serves as a central hub to demonstrate my frontend development capabilities.

## 🛠️ Tech Stack

Built with a modern, performance-focused stack:

-   **Core**: [React 19](https://react.dev/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Sass (SCSS)](https://sass-lang.com/) with a 7-1 pattern architecture
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **UI Components**:
    -   [Radix UI](https://www.radix-ui.com/) (Accessible primitives for Dialogs/Tabs)
    -   [Swiper](https://swiperjs.com/) (Touch-friendly sliders)
    -   [Lucide React](https://lucide.dev/) (Icons)

## ✨ Key Features

-   **Snap Scroll Navigation**: Smooth, full-page scrolling interaction for main sections.
-   **Responsive Design**: Optimized for various screen sizes.
-   **Interactive Modals**: Detailed views for project information managed via Zustand and Radix UI.
-   **Dynamic Sections**:
    -   **Home**: Landing introduction.
    -   **About**: Personal introduction.
    -   **Skills**: specific technical skill sets.
    -   **Career**: Professional timeline.
    -   **Projects**: Gallery of works with filtering and detailed views.
    -   **Contact**: Contact information.

## 📂 Project Structure

```bash
src/
├── components/
│   ├── common/      # Reusable UI components (Buttons, Inputs)
│   ├── layout/      # Layout components (Header, Footer, MainLayout)
│   └── sections/    # Page sections (Home, About, Project, etc.)
├── styles/
│   ├── abstracts/   # Variables, mixins
│   ├── base/        # Reset, typography
│   └── components/  # Component-specific styles
├── store/           # Zustand state stores
├── hooks/           # Custom React hooks
└── data/            # Static content data (projects, skills)
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

-   Node.js (Latest LTS recommended)
-   npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/portfolio-yujin.git
    cd portfolio-yujin
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

### Development

Start the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Build the project for production:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
