import { Coin } from '@/models/types/types.ts'
import { getCoins } from '@/api/fetch'

const COINGECKO_API = "https://api.coingecko.com/api/v3";

type FechType = {
    coins: Coin[]
}

function SearchAPI(query: string): Promise<FechType>{
    return getCoins(`${COINGECKO_API}/search?query=${query}`);
}

function DataAPI(values?: string[]): Promise<Coin[]>{
    const params = values?.length 
        ? `ids=${values.join(",")}` 
        : "order=market_cap_desc&per_page=20";
    
    return getCoins(`${COINGECKO_API}/coins/markets?vs_currency=usd&${params}`);
}

export { SearchAPI, DataAPI }