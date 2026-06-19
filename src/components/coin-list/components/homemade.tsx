import  {useCoinToolsStore } from '../../../store/CoinToolsStore'
import { Coin } from '../../types'

export function HomemadeStat({ coin }: { coin: Coin }){
    const getCoinData = useCoinToolsStore(store => store.getCoinData);
    const coinData = getCoinData(coin.id);

    const sumQty = coinData.positions.reduce((sum, item) => sum + Number(item.qty), 0);
    const SumPrice = sumQty * coin.current_price;

    return(
        <div className="flex flex-col items-end min-w-0">
            {sumQty.toFixed(0)}
            <span className={`text-xs text-neutral-500 dark:text-neutral-400 lowercase`}>
               ${SumPrice.toFixed(2)}
            </span>
        </div>
    )
}