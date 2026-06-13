import { PositionListProps } from './type';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore';
import { Button } from "@/components/ui/button"


export function PositionList({pos, index}: PositionListProps){
   const selectCoinId = useCoinToolsStore(state => state.selectCoinId)
   const removePosition = useCoinToolsStore(state => state.removePosition)
   return(
      <li>
         {`${index + 1}. Дата: ${pos.date} Кол: ${pos.qty} Цена: ${pos.price}`} 
         <Button onClick={() => removePosition(selectCoinId, pos.id)}>-</Button>
      </li>
   )
}