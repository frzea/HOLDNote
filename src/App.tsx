import { Search } from './components/search/index.tsx'
import { Outlet } from "react-router-dom";
import { useCoinSync } from './composable/useCoinSync.ts'
import './index.css'
import { useDarkMode } from './composable/useDarkMode.ts'
import { Switch } from "@/components/ui/switch"
import { TabsCoins } from "@/pages/tabsCoin.tsx"



export default function App(){
  const { ChangeMode } = useDarkMode(true);
  useCoinSync();

  return ( 
    <>
      <div className='bg-white dark:bg-gray-600 text-black dark:text-white'>
        <div className='px-5'>
          <div className='flex justify-between pt-3'>
            <div>HOLDNote</div>
            <Switch onClick={ChangeMode}/>
          </div>
          <Search />
          <TabsCoins/>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
