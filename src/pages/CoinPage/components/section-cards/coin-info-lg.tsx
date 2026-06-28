import{useCoinInfoCalc} from '../../hooks/useCoinInfoCalc'
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
   const {capitalization, totalInvested, profitLossPercent,isPositive, pnl, totalQty, avgPrice, bestBuy} = useCoinInfoCalc();

   const date = new Date(bestBuy?.date ?? "1996-11-21").toLocaleDateString('ru-RU');
    
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs @ dark:*:data-[slot=card]:bg-card">
        <Card className="@container/card md:p-1 lg:p-2">
        <CardHeader className="md:p-1">
          <CardDescription className="md:text-xs xl:text-xs">Capitalization</CardDescription>
          <CardTitle className="md:text-xs xl:text-xs">
            ${(capitalization ?? 0).toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 2,})}
          </CardTitle>
          <CardAction>
               <Badge variant="outline" className={`${isPositive ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'}`}>
                  <span className={`font-medium px-1 py-1 rounded w-auto flex justify-center md:text-xs`}>
                     {isPositive ? '+' : ''}{Number(profitLossPercent).toFixed(2)}%
                  </span>
               </Badge>
          </CardAction>
        </CardHeader>
      </Card>
      <Card className="@container/card md:p-1 lg:p-2">
        <CardHeader className="md:p-1">
            <div className='flex justify-between w-full md:text-xs xl:text-md'>
               <div className="text-muted-foreground">
                  Total Qty
               </div>
               <div>
                  {(totalQty ?? 0).toLocaleString('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2,})}
               </div>
            </div>
           <div className='flex justify-between w-full md:text-xs xl:text-xs'>
               <div>
                  Total Invested 
               </div>
               <div >
                  ${(totalInvested ?? 0).toLocaleString('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2,})}
               </div>
            </div>
        </CardHeader>
      </Card>
      <Card className="@container/card md:p-1 lg:p-2">
        <CardHeader className="md:p-1">
            <div className='flex justify-between w-full md:text-xs'>
               <div className="text-muted-foreground">
                  PNL
               </div>  
               <div>
                    <span className={`text-xs font-medium ${isPositive ? 'text-emerald-500' : 'text-red-500'} sm:text-md`}>
                        {isPositive ? '+' : '-'}${Math.abs(pnl).toLocaleString('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2,})}
                    </span>
               </div>            
            </div>
            <div className='flex justify-between w-full md:text-xs'>
               <div className="text-muted-foreground">
                  AVG Pirce
               </div>  
               <div>
                  ${(avgPrice ?? 0).toLocaleString('en-US', {minimumFractionDigits: 0,maximumFractionDigits: 2,})}
               </div>            
            </div>
        </CardHeader>
      </Card>  
      <Card className="@container/card md:p-1 lg:p-2">
        <CardHeader className="md:p-1">
            <div className='flex justify-between w-full md:text-xs'>
               <div className="text-muted-foreground">
                  Best buy
               </div>
               <div className="text-muted-foreground">
                  {date}
               </div>
            </div>
           <div className='flex justify-between w-full md:text-xs'>
               <div>
                  price: {bestBuy?.price} 
               </div>
               <div>
                  qty: {bestBuy?.qty}
               </div>
            </div>
        </CardHeader>
    
      </Card>
    </div>
  )
}