import { PositionListProps } from './type';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore';


export function PositionList({pos, index}: PositionListProps){
   const {removePosition, selectCoinId} = useCoinToolsStore();
   return(
      <li>
         {`${index + 1}. Дата: ${pos.date} Кол: ${pos.qty} Цена: ${pos.price}`} 
         <button onClick={() => removePosition(selectCoinId, pos.id)}>-</button>
      </li>
   )
}