import { Search } from './components/search/index.tsx'
import { Outlet, useLocation  } from "react-router-dom";
import { useCoinSync } from './composable/useCoinSync.ts'
import './index.css'
import { TabsCoins } from "@/pages/tabsCoin.tsx"
import { Header } from './components/header/index.tsx';



export default function App(){
  useCoinSync();
  const location = useLocation();
  const isCoinPage = location.pathname.includes("/coin/");

  return ( 
    <div className=' min-h-screen md:h-screen  bg-white dark:bg-neutral-900 text-black dark:text-white'>

      {/* Мобильный */}
      <div className="md:hidden">
        {!isCoinPage && (
            <div className='flex-row items-center px-3'>
              <Header/>
              <Search />
              <TabsCoins/>
            </div>
        )}
        <Outlet />
      </div>

      {/* Десктоп */}
      <div className="hidden md:flex h-full">
        <div className="flex flex-col  w-70 border-r h-full">
          <Header/>
          <Search />
          <TabsCoins/>
        </div>
        <div className="flex flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
