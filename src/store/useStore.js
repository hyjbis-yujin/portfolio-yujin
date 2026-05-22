import { create } from 'zustand'

const useStore = create((set) => ({
    activeSection: 'home',
    setActiveSection: (section) => set({ activeSection: section }),


    projectFilter: 'All',
    setProjectFilter: (filter) => set({ projectFilter: filter }),
}))

export default useStore
