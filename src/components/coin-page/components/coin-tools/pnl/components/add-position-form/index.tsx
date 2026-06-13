import { AddPositionFormProps } from './type.ts';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore.ts'
import { useCoinStore } from '../../../../../../../store/CoinStore.ts'

export function AddPositionForm({newPosition,setNewPosition}: AddPositionFormProps){
   const selectCoinId = useCoinToolsStore(state => state.selectCoinId)
   const addPosition = useCoinToolsStore(state => state.addPosition)
   const selectCoin = useCoinStore(state => state.selectCoin)
   const addToPurchasedCoins = useCoinStore(state => state.addToPurchasedCoins)
   return(
      <>
         Количество: <input type="number" min={0} value={newPosition.qty} onChange={e => setNewPosition({...newPosition, qty : Number(e.target.value)})}/><br/>
         Цена: <input type="number" min={0} value={newPosition.price} onChange={e => setNewPosition({...newPosition, price : Number(e.target.value)})}/><br/>
         Дата: <input type="date" value={newPosition.date} onChange={e => setNewPosition({...newPosition, date : e.target.value})}/><br/>
         <button onClick={() => {addPosition(selectCoinId, newPosition); addToPurchasedCoins(selectCoin)} }>Добавить</button>
      </>
   )
}