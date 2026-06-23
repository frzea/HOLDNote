import { useState } from "react"
import { AddPositionForm } from "./components/add-position-form/index.tsx";
import { PositionList } from "./components/position-list/index.tsx";
import { calcPNL } from "./composable/pnlCalculations.ts";
import { Position } from "../types.ts";
import { ScrollArea } from "@/components/ui/scroll-area"

const today = new Date().toISOString().split('T')[0];
const EMPTY_POSITION: Position = {id: '',  qty : 0, price : 0, date : today}

export function PNL(){
   const [newPosition, setNewPosition] = useState<Position>(EMPTY_POSITION);  
   const { positions } = calcPNL();

   return(
      <div id ="PNL" className="flex flex-col flex-1 min-h-0 mb-3">
         <ScrollArea className="h-full min-h-0 w-auto rounded-md md:pr-3">
            <div className="flex flex-col">
               {positions?.map((pos, i) => (
                  <PositionList key={pos.id} pos={pos} index={i} />
               ))}
            </div>
         </ScrollArea>
         <AddPositionForm newPosition={newPosition} setNewPosition={setNewPosition} />
      </div>
   )
}