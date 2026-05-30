import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoins } from "../services/get-coins.js";
import { Graf } from "./graf.js";
import { CoinTools } from './coin-tools/coin-tools.tsx';
import { CoinHeader } from "./coin-header.js";
import { Coin, CoinData,BinanceData } from "./types.ts";

export function CoinPage(){
    const { coinId } = useParams();
    const [grafData, setGrafData] = useState<BinanceData>([]);

    const storeData: CoinData = JSON.parse(localStorage.getItem('coins'));
    const coinData = [...storeData.topCoins, ...storeData.userCoins];
    const coin: Coin = coinData.find(c => c.id === coinId);
    const coinSymbol = coin?.symbol?.toUpperCase();

    useEffect(()=>{
      let cancelRequest = false;
        async function getData() {
            try{
              const symbol = coinSymbol?.endsWith('USDT') ? coinSymbol : `${coinSymbol}USDT`;
              const  graf: BinanceData = await getCoins(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=168`);
              if(!cancelRequest){
                setGrafData(graf);
              }
            } catch(err) {
              if(!cancelRequest){
                setGrafData([]);
              }  
            }
        }

        getData();

        return () =>{
          cancelRequest = true;
        }
    },[coinSymbol])

  return(
    <>
      <div id="coin-page">
        <Graf grafData={grafData}/>
      </div>
      <CoinHeader hederData={coin}/>
      <CoinTools coinId={coinId} lastPrice={coin.current_price}/>
    </>
  )
}