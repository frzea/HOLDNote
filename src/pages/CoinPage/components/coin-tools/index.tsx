import { PNL } from "./components/pnl/index"
import { TaskScheduler } from "./components/todo/index";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function CoinTools(){
   return(
      <Tabs defaultValue="pnl" className="flex flex-col flex-1 min-h-0">
         <TabsList className='flex items-center justify-center shrink-0' variant="line">
            <TabsTrigger className="cursor-pointer" value="pnl">Transaction history</TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="todos">Notes</TabsTrigger>
         </TabsList>
         <TabsContent value="pnl" className="flex flex-1 min-h-0">
            <PNL/>
         </TabsContent>
         <TabsContent value="todos" className="flex  flex-col flex-1 min-h-0">
            <TaskScheduler/>
         </TabsContent>
      </Tabs>  
   )
}