import { create } from 'zustand'

const useStore = create((set) => ({
    activeSection: 'home',
    setActiveSection: (section) => set({ activeSection: section }),

    // Future: Filter for projects
    projectFilter: 'All',
    setProjectFilter: (filter) => set({ projectFilter: filter }),
}))

export default useStore
