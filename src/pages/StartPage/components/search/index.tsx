import { CoinList } from '../coin-list/index';
import { useSearch } from './hooks/useSearch';
import { InputSpinner } from "@/components/ui/InputSpinner";

export function Search(){
   const { resultSearchList, loading, handleChangeSearch } = useSearch();
   const isData = resultSearchList.length > 0;

   return(
      <>
         <div className='my-3 px-3'>
            <InputSpinner onChange={handleChangeSearch} isLoading={loading}/>
         </div>
         {isData && 
            <div className='ml-3'>
               <CoinList data={resultSearchList} mode={'add'} />
            </div>
         }
      </>
   )
}