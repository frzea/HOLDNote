import { Link } from "react-router-dom";
import { CoinListProps } from './type';
import { useCoinStore } from '../../store/CoinStore';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CoinList({ data = [], form }: CoinListProps){
    const addToUserCoins = useCoinStore(store => store.addToUserCoins);
    const removeUserCoin = useCoinStore(store => store.removeUserCoin);

 return(
    <div className="flex flex-col gap-2 pb-3">
      {data.map(coin => (
        <div
          key={coin.id}
          className="flex items-center justify-between rounded-xl bg-neutral-800 px-4 py-3"
        >
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={coin.image ?? coin.thumb}
              alt={coin.id}
              width={28}
              height={28}
              className="rounded-full shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <Link to={'/coin/' + coin.id} className="font-semibold truncate">
                {coin.name}
              </Link>
              <span className="text-sm text-neutral-400 lowercase">
                {coin.symbol}
              </span>
            </div>
          </div>

          <Button
            size="icon"
            variant="secondary"
            className="rounded-full shrink-0"
            onClick={() => form === true ? addToUserCoins(coin) : removeUserCoin(coin)}
          >
            {form === true ? '+' : '-'}
          </Button>
        </div>
      ))}
    </div>
  )
}
