import { Position } from "../../../types/type";
import { Dispatch, SetStateAction } from 'react';

interface AddPositionFormProps{
    newPosition: Position
    setNewPosition: Dispatch<SetStateAction<Position>>;
    handleAddPosition: () => void
}

export type { AddPositionFormProps }