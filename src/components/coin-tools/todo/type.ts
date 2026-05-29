import { ToolsData } from '../types'

type UpdateCoinTools = (updater: (toolsData: ToolsData) => ToolsData) => void

interface TodoProps{
    CoinToolsData: ToolsData
    updateCoinTools: UpdateCoinTools
}

export type { TodoProps, UpdateCoinTools }