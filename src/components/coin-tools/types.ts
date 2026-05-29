interface Position {
  id: string
  qty: number | null
  price: number | null
  date: string
}

interface Todo{
    id: string
    text: string
    done: boolean
    date: string
}

interface ToolsData{
    positions: Position[]
    todos: Todo[]
}

type UserCoinsToolsData = Record<string, ToolsData>


export type {Position, Todo, ToolsData, UserCoinsToolsData}