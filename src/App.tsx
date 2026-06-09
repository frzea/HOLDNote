import { CoinList } from './components/coin-list/coin-list.tsx'
import { Search } from './components/search/index.tsx'
import { Outlet } from "react-router-dom";
import { useCoinStore } from './store/CoinStore.ts'
import { useCoinSync } from './composable/useCoinSync.ts'
import './index.css'
import { useDarkMode } from './composable/useDarkMode.ts'



export default function App(){
  const { ChangeMode } = useDarkMode(false);
  useCoinSync();
  const {topCoins, userCoins} = useCoinStore();

  return ( 
    <>
      <div className='bg-white dark:bg-gray-600 text-black dark:text-white'>
        <div>
          <div className='flex justify-between'>
            <div className='mx-5'>HOLDNote</div>
            <button className=' border w-5' onClick={ChangeMode}>*</button>
          </div>
          <Search />
          <CoinList data={topCoins} form={true} />
          <hr/>
          <CoinList data={userCoins} form={false} />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
