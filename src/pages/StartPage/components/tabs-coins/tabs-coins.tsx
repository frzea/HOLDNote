import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useCoinStore } from '@/store/CoinStore.ts';
import { CoinList } from '../coin-list/index.tsx'

export function TabsCoins(){
   const {topCoins, userCoins, purchasedCoins} = useCoinStore();

   return (  
      <Tabs defaultValue="overview" className="flex flex-col  flex-1 min-h-0 pb-2 md:pl-3">
         <TabsList className='flex items-center justify-center shrink-0' variant="line">
            <TabsTrigger className="cursor-pointer" value="tops">Top`s</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="follow">Follow</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="homemade">Homemade</TabsTrigger>
         </TabsList>
         <TabsContent value="tops" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={topCoins} mode={'add'} />
         </TabsContent>
         <TabsContent value="follow" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={userCoins} mode={'remove'} />
         </TabsContent>
         <TabsContent value="homemade" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={purchasedCoins} mode={'view'} />
         </TabsContent>
      </Tabs>    
   )
}

