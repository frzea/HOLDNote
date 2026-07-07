import { getCoins } from "../fetch";
import { BinanceCandle } from '@/models/types/types'

const BINANCE_API = "https://api.binance.com/api/v3";

function BinanceAPI(symbol: string): Promise<BinanceCandle[]>{
    return getCoins(
        `${BINANCE_API}/klines?symbol=${symbol}&interval=1h&limit=168`
    );
}

export { BinanceAPI }