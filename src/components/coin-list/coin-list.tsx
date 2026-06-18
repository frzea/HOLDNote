import { Link } from "react-router-dom";
import { CoinListProps } from './type';
import { useCoinStore } from '../../store/CoinStore';
import { Button } from "@/components/ui/button"
import { HomemadeStat } from "./components/homemade";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function CoinList({ data = [], form }: CoinListProps){
    const addToUserCoins = useCoinStore(store => store.addToUserCoins);
    const removeUserCoin = useCoinStore(store => store.removeUserCoin);
    const removePurchasedCoin = useCoinStore(store => store.removePurchasedCoin);

 return(
    <ScrollArea className="flex-1 h-full min-h-0 w-auto rounded-md md:pr-2.5">
    <div className="flex flex-1 flex-col gap-1 pb-5">
      {data.map(coin => {

        const change = coin.price_change_percentage_24h ?? 0;
        const isPositive = change >= 0;

        return (
        <div
          key={coin.id}
          className="flex items-center justify-between rounded-md bg-neutral-100  dark:bg-neutral-800 px-3 py-2 lg:py-1"
        >
          <div className="flex items-center gap-3 min-w-0">
            <img src={coin.image ?? coin.thumb} alt={coin.id} width={28} height={28} className="rounded-full shrink-0" />
            <div className="flex flex-col min-w-0 text-neutral-900 dark:text-neutral-100">
              <Link to={'/coin/' + coin.id} className="font-semibold truncate">
                {coin.name}
              </Link>
              <span className="text-sm text-neutral-500 dark:text-neutral-400 lowercase">
                {coin.symbol}
              </span>
            </div>
          </div>
          <div className="flex items-center  gap-3 min-w-0">
            {(form !== null) &&
              (
                <>
                  <div className="flex flex-col items-end min-w-0">
                      ${coin.current_price}
                    <span className={`text-sm lowercase ${isPositive ? "text-emerald-500" : "text-red-500"}`}>
                      {change.toFixed(1)}{change.toFixed(1) && '%'}
                    </span>
                  </div>
                  <Button
                    size="xs"
                    variant="outline"
                    //className="rounded-md text-neutral-800 dark:text-neutral-100 border-neutral-800 dark:border-neutral-100 shrink-0 bg-neutral-100 dark:bg-neutral-800"
                    onClick={() => {if(form === true) {addToUserCoins(coin)} if(form === false){ removeUserCoin(coin)} else {removePurchasedCoin(coin.id)}}}
                  >
                    {form === true ? '+' : form === false ? '-' : 'X'}
                  </Button>
                </>
              )
            }

            {form === null && 
              (
                <>
                  <HomemadeStat coin={coin}/>
                  <span className={`text-xs font-medium px-2 py-1 rounded w-14 flex justify-center  ${isPositive ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'}`}>
                    {isPositive ? '+' : ''}{change.toFixed(2)}%
                  </span>
                </>
              )
            }
          </div>

        </div>
        )
      })}
    </div>
    </ScrollArea>
  )
}
