import { useState, useEffect, useCallback } from 'react'
import { Coin } from '@/models/types/types.ts'
import { SearchAPI } from '@/api/endpoints/coingecko';

export function useSearch(){
    const [strSearch, setStrSearch] = useState<string>('');
    const [resultSearchList, setResultSearchList] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{

        if (strSearch === '') {
            setResultSearchList([]);
            setLoading(false);
            return;
        }

        const dilaySearch = setTimeout(async () => {
            try{
                const resultFind = await SearchAPI(strSearch);
                setResultSearchList(resultFind.coins);
            } catch(err) {
                console.error(err);
            } finally {
                setLoading(false); 
            }
  
        }, 3000);

        return ()=>{
          clearTimeout(dilaySearch);  
        };
    },[strSearch]);


    const handleChangeSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setStrSearch(e.target.value);
            setLoading(true); 
        }, []
    )

    return { resultSearchList, loading, handleChangeSearch} 
}