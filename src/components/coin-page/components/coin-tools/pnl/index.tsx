import { useState } from "react"
import { useToggle } from '../../../../../composable/useToggle.ts'
import { AddPositionForm } from "./components/add-position-form/index.tsx";
import { PositionList } from "./components/position-list/index.tsx";
import { calcPNL } from "./composable/pnlCalculations.ts";
import { Position } from "../types.ts";

const EMPTY_POSITION: Position = {id: '',  qty : 0, price : 0, date : ''}

export function PNL(){
   const {toggleValue, toggle} = useToggle(false);
   const [newPosition, setNewPosition] = useState<Position>(EMPTY_POSITION);  
   const {totalInvested, positions, pnl} = calcPNL();

   return(
      <div id ="PNL">
         PNL
         <button onClick={toggle}>{ toggleValue ? 'Close' : 'Add'}</button>
         {toggleValue && (
            <div 
               className="fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center z-50"
               onClick={toggle} // клик на фон закрывает
            >
               <div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl "
                  onClick={e => e.stopPropagation()} // клик внутри не закрывает
               >
                  <div className="flex justify-between">
                  <h2 className="text-lg font-bold">Добавить позицию</h2>
                  <button onClick={toggle}>✕</button>
                  </div>

                  <AddPositionForm 
                  newPosition={newPosition}
                  setNewPosition={setNewPosition}
                  />
               </div>
            </div>
         )}
         <hr/>
         <ul>
            {positions?.map((pos, i) =>
               <PositionList 
                  key={pos.id} 
                  pos={pos} 
                  index={i} 
               />
            )}
         </ul>

         <p>pnl:  {pnl}$ Всего вложенно: {totalInvested}$</p>
      </div>
   )
}



/*

         {toggleValue && 
            <AddPositionForm 
               newPosition={newPosition}
               setNewPosition={setNewPosition}
            />}

*/