import { Position } from "../../type";

interface PositionListProps{
    pos: Position
    index: number
    onRemove: (id: string) => void
}

export type {PositionListProps}