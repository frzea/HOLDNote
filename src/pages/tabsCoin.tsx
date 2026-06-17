import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useCoinStore } from '../store/CoinStore';
import { CoinList } from '../components/coin-list/coin-list.tsx'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


export function TabsCoins(){
   const {topCoins, userCoins, purchasedCoins} = useCoinStore();

   return (  
      <Tabs defaultValue="overview" className="flex flex-col flex-1 min-h-0 mb-2">
         <TabsList className='flex items-center justify-center shrink-0' variant="line">
            <TabsTrigger value="tops">Top`s</TabsTrigger>
            <TabsTrigger value="follow">Follow</TabsTrigger>
            <TabsTrigger value="homemade">Homemade</TabsTrigger>
         </TabsList>
         <TabsContent value="tops" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={topCoins} form={true} />
         </TabsContent>
         <TabsContent value="follow" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={userCoins} form={false} />
         </TabsContent>
         <TabsContent value="homemade" className="flex  flex-col flex-1 min-h-0">
            <CoinList data={purchasedCoins} form={null} />
         </TabsContent>
      </Tabs>    
   )
}