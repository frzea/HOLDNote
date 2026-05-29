import { ToolsData } from '../types.ts'

interface PNLProps{
    lastPrice: number
    CoinToolsData: ToolsData
    updateCoinTools: (updater:(toolsData: ToolsData) => ToolsData) => void
}

export type { PNLProps }