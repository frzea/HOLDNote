import { useCoinStore } from "@/store/CoinStore"
import { useThemeStore } from "@/store/themeStore"
import { useEffect } from 'react'


export function useCoinSync(){
      const syncCoins = useCoinStore(store => store.syncCoins);
      const { isDark } = useThemeStore()
    
      useEffect(() => {
        
        syncCoins();
        document.documentElement.classList.toggle('dark', isDark)

        const interval: number = setInterval(syncCoins, 1 * 60 * 1000);
    
        return () => {
          clearInterval(interval)
        };
    
      },[]);

}