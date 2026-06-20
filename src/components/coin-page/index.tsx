import { useParams } from "react-router-dom";
import { CoinInfo } from "../coin-page/components/coin-info/coin-info.tsx";
import { Graf } from "./components/coin-graf/index.js";
import { CoinTools } from './components/coin-tools/index.tsx';
import { CoinHeader } from "./components/coin-header/coin-header.js";
import { useGrafData } from './components/coin-graf/useGrafData.ts';
import { useCoinStore } from '../../store/CoinStore.ts';
import {Header} from '../header/index.tsx';
import {SectionCards} from './components/coin-info/coin-info-md.tsx'

export function CoinPage(){
    const { coinId } = useParams();
    const { data } = useGrafData(coinId);
    const selectCoin = useCoinStore(store => store.selectCoin)

    if (!selectCoin) return null 

  return (
    <div className='flex flex-col h-full flex-1 gap-3 px-3 sm:px-7'>
      <div className="md:hidden">
        <Header />
      </div>
      <CoinHeader />
      <div >
        <Graf data={data}/>
      </div>
      <div className="sm:hidden"> 
        <CoinInfo />  
      </div>
      <div className="hidden sm:flex flex-col gap-4 mb-2  md:gap-6  @container/main ">
        <SectionCards />
      </div>
      <CoinTools />
    </div>
  )
}