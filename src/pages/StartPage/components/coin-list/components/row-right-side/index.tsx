import { Coin } from '@/models/types/types'
import { CoinListMode } from '../../types/type'
import { HomemadeStat } from "./components/homemade"
import { CoinListTopsFollowStat } from './components/tops-follow-stat'

interface CoinListRowRightSideProps{
    coin: Coin
    mode: CoinListMode;
}

export function CoinListRowRightSide({coin, mode}: CoinListRowRightSideProps){
   return (
      <div className="flex items-center  gap-2 min-w-0">
         {
            mode === 'view' ? <HomemadeStat coin={coin}/> : <CoinListTopsFollowStat coin={coin} mode={mode}/>
         }
      </div>
   )
}
