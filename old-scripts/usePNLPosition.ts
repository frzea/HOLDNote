import { useState } from "react"
import { Position, UpdateCoinTools } from '@/models/types/types'


const EMPTY_POSITION: Position = {id: '',  qty : 0, price : 0, date : ''}

export function usePNLPosition(updateCoinTools : UpdateCoinTools){
    const [newPosition, setNewPosition] = useState<Position>(EMPTY_POSITION);

  
  return {
      newPosition,
      setNewPosition, 
    }
    
}