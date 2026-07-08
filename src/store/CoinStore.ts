import { Coin } from '../models/types/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DataAPI } from '../api/endpoints/coingecko';

interface CoinStore {
   topCoins: Coin[]
   userCoins: Coin[]
   purchasedCoins: Coin[]
   selectCoinId: string | null
   selectCoin: Coin | null
   setCoins: (topData: Coin[], userData: Coin[]) => void
   addToUserCoins: (coin: Coin) => void
   removeUserCoin: (coin: Coin) => void
   addToPurchasedCoins: (coin: Coin) => void
   removePurchasedCoin: (coinID: string) => void
   getCoinById: (id: string) => Coin | undefined
   setSelectedCoin: (id: string) => void
   syncCoins: () => Promise<void>
}


export const useCoinStore = create<CoinStore>()(
   persist((set,get) => ({
      
      topCoins: [],
      userCoins: [],
      purchasedCoins: [],
      selectCoinId: null,
      selectCoin: null,

      setCoins: ( topData, userData) => set({ topCoins: topData,  userCoins: userData }),

      addToUserCoins: (coin) => {
         if (get().userCoins.some(c => c.id === coin.id)) return
         set(state => ({ userCoins: [...state.userCoins, coin] }))
      },

      removeUserCoin: (coin) => {
         set(state => ({ userCoins: state.userCoins.filter(c => c.id !== coin.id) }))
      },

      addToPurchasedCoins: (coin) => {
         if (get().purchasedCoins.some(c => c.id === coin.id)) return
         set(state => ({ purchasedCoins: [...state.purchasedCoins, coin] }))
      },

      removePurchasedCoin: (coinID) => {
         set(state => ({ purchasedCoins: state.purchasedCoins.filter(c => c.id !== coinID) }))
      },

      getCoinById: (id) => {
         const { topCoins, userCoins, purchasedCoins } = get();
         return topCoins.find(c => c.id === id) ?? userCoins.find(c => c.id === id) ?? purchasedCoins.find(c => c.id === id)
      },

      setSelectedCoin: (id) => {
         const coin = get().getCoinById(id);
         if(coin) set({ selectCoin : coin, selectCoinId: id});
      },

      syncCoins: async () => {
         const { userCoins,purchasedCoins } = get();
         const userCoinsID = (userCoins || []).map(c => c.id);
         const purchasedCoinsID = (purchasedCoins || []).map(c => c.id);
 
         try{
            const [topCoinsData, userCoinsData, purchaseCoinsData] = await Promise.all([
               DataAPI(),
               userCoinsID.length ? DataAPI(userCoinsID) : Promise.resolve([]),
               purchasedCoinsID.length ? DataAPI(purchasedCoinsID) : Promise.resolve([])
            ]);

            const userCoinsSorted = userCoinsID.map(id => userCoinsData.find(c => c.id === id)).filter(Boolean);
            const purchaseCoinsSorted = purchasedCoinsID.map(id => purchaseCoinsData.find(c => c.id === id)).filter(Boolean);

            set(({topCoins : topCoinsData, userCoins : userCoinsSorted, purchasedCoins: purchaseCoinsSorted}));
         } catch(err) {
            console.error('Ошибка загрузки монет:', err);
         }   
      }

   }),
   { name: 'coins'}
));