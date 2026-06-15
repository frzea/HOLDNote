import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeStore {
    isDark: boolean
    toggleMode: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: true,
      toggleMode: () => set((state) => {
        const next = !state.isDark
        document.documentElement.classList.toggle('dark', next)
        return { isDark: next }
      }),
    }),
    { name: 'theme' }
  )
)