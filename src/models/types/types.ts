type Coin = {
    id: string
    symbol: string
    current_price: number
    name: string
    fully_diluted_valuation: number
    high_24h: number
    low_24h: number
    price_change_percentage_24h: number
    total_volume: number
    image: string
    thumb: string
}

type Position = {
  id: string
  qty: number 
  price: number 
  date: string
}

type Todo = {
    id: string
    text: string
    done: boolean
    date: string
}

type ToolsData = {
    positions: Position[]
    todos: Todo[]
}

type BinanceCandle = [number, string, string, string, string, string, number, string, number, string, string, string];


export type { Coin, Position, Todo, ToolsData, BinanceCandle }
