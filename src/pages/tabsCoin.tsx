import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useCoinStore } from '../store/CoinStore';
import { CoinList } from '../components/coin-list/coin-list.tsx'


export function TabsCoins(){
   const {topCoins, userCoins} = useCoinStore();

   return (  
      <Tabs defaultValue="overview">
         <TabsList variant="line">
            <TabsTrigger value="overview">Top coins</TabsTrigger>
            <TabsTrigger value="analytics">Favorites</TabsTrigger>
            <TabsTrigger value="reports">My coins</TabsTrigger>
         </TabsList>
         <TabsContent value="overview">
            <CoinList data={topCoins} form={true} />
         </TabsContent>
         <TabsContent value="analytics">
            <CoinList data={userCoins} form={false} />
         </TabsContent>
      </Tabs>    
   )
}