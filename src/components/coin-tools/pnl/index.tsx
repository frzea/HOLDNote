
import { PNLProps } from "./type.ts";
import { usePNL} from "./composable/usePNL.ts";
import { AddPositionForm } from "./components/add-position-form/index.tsx";
import { PositionList } from "./components/position-list/index.tsx";

export function PNL(props : PNLProps){
   const { addPNL, toggelAddPNL, handleAddPosition, handleRemovePosition, totalInvested, pnl, newPosition, setNewPosition, positions } = usePNL(props);

   return(
      <div id ="PNL">
         PNL
         <button onClick={toggelAddPNL}>{ addPNL ? 'Close' : 'Add'}</button>
         {addPNL && 
            <AddPositionForm 
               newPosition={newPosition}
               setNewPosition={setNewPosition}
               handleAddPosition={handleAddPosition}
            />}
         <hr/>
         <ul>
            {positions?.map((pos, i) =>
               <PositionList 
                  key={pos.id} 
                  pos={pos} 
                  index={i} 
                  onRemove={handleRemovePosition} 
               />
            )}
         </ul>

         <p>pnl:  {pnl}$ Всего вложенно: {totalInvested}$</p>
      </div>
   )
}
