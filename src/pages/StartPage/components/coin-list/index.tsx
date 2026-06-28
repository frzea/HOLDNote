import { CoinListMode } from './types/type';
import { Coin } from '@/models/types/types'
import { ScrollArea } from "@/components/ui/scroll-area"
import { CoinListRowLeftSide } from "./components/row-left-side";
import { CoinListRowRightSide } from "./components/row-right-side";
import { useLocation } from "react-router-dom";

interface CoinListProps{
    data: Coin[]
    mode: CoinListMode;
}

export function CoinList({ data = [], mode }: CoinListProps){
 const { pathname } = useLocation()
 return(
    <ScrollArea className="flex-1 h-full min-h-0 w-auto rounded-md md:pr-2.5">
    <div className="flex flex-1 flex-col gap-1 pb-5">
      {
        data.map(coin => 
          <div key={coin.id} aria-checked={pathname === `/coin/${coin.id}`} className="flex text-xs items-center justify-between rounded-md transition-colors duration-300 bg-neutral-100  dark:bg-neutral-800 px-3 py-2
                                         hover:bg-neutral-200 hover:dark:bg-neutral-700 hover:border-x-2 hover:border-orange-500 aria-checked:border-x-2 aria-checked:border-orange-500
                                         md:py-1 md:px-1.5 ">
            <CoinListRowLeftSide coin={coin}/>
            <CoinListRowRightSide coin={coin} mode={mode}/>
          </div>
        )
      }
    </div>
    </ScrollArea>
  )
}
