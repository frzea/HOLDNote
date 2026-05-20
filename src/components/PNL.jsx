import { useState } from "react";

export function PNL({ coinId, lastPrice, userPnlPosition, updateCoinTools}){
   const [addPNL, setAddPNL] = useState(false);
   const [newPosition, setNewPosition] = useState({id: '',  qty : '', price : '', date : ''})


   function handleAddPosition(){

      const posWithID = {...newPosition, id : crypto.randomUUID()};

      updateCoinTools((coinData) => ({
         ...coinData, 
         positions:[...coinData.positions, posWithID]
      }));
      setNewPosition({id: '', qty: '', price: '', date: '' });
   }

   function handleRemovePosition(removeID){
     updateCoinTools((coinData)=>({
         ...coinData, 
         positions : [...coinData.positions].filter(position => position.id != removeID)}
      ))   
   }

   const positions = userPnlPosition?.[coinId]?.positions || [];
   const totalInvested = positions.reduce((sum, p) => sum + p.qty * p.price, 0);
   const currentValue = positions.reduce((sum, p) => sum + p.qty * lastPrice, 0);
   const pnl = currentValue - totalInvested;

   return(
      <div id ="PNL">
         PNL
         <button onClick={()=> setAddPNL(!addPNL)}>
            {(addPNL) ? 'Close' : 'Add'} 
         </button>
         {addPNL && <div id="add-PNL">
               Количество: <input type="text" value={newPosition.qty} onChange={e=> setNewPosition({...newPosition, qty : Number(e.target.value)})}/><br/>
               Цена: <input type="text" value={newPosition.price} onChange={e=> setNewPosition({...newPosition, price : Number(e.target.value)})}/><br/>
               Дата: <input type="date" value={newPosition.date} onChange={e=> setNewPosition({...newPosition, date : e.target.value})}/><br/>
               <button onClick={()=>{handleAddPosition()}}>Добавить</button>
            </div>
         }
         <hr/>
         {userPnlPosition?.[coinId]?.positions?.map((pos, i) =>
            <li key={i}>
               {`${i+1}. Дата: ${pos.date} Кол: ${pos.qty} Цена: ${pos.price}   `} 
               <button onClick={()=>{handleRemovePosition(pos.id)}}>-</button>
            </li>
         )}

         <p>pnl:  {pnl}$ Всего вложенно: {totalInvested}$</p>
      </div>
   )
}
