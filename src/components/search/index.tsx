import { CoinList } from '../coin-list/coin-list';
import { useSearch } from './useSearch';
import { Input } from "@/components/ui/input";
import { InputSpinner } from "@/components/ui/InputSpinner";

export function Search(){
   const {resultSearchList, loading, handleChangeSearch } = useSearch();

   return(
      <>
         <div className='my-3'>
            <InputSpinner onChange={handleChangeSearch} isLoading={loading}/>
         </div>
         {
            loading || <CoinList data={resultSearchList} form={true}/>
         }
      </>
   )
}