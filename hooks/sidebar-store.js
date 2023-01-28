import { create } from 'zustand'

export const useSidebarStore = create(set => ({
    sidebar: false,
    open: () => set(state => ({ sidebar: true })),
    close: () => set(state => ({ sidebar: false })),
    toggle: () => set(state => ({ sidebar: !state.sb })),
}))
