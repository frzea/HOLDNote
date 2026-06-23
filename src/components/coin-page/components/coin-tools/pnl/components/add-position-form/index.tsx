import { AddPositionFormProps } from './type.ts';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore.ts'
import { useCoinStore } from '../../../../../../../store/CoinStore.ts'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { 
   Dialog,
   DialogTrigger,
   DialogContent,
   DialogHeader,
   DialogTitle,
    } from "@/components/ui/dialog"

import { 
   Field,
   FieldGroup
 } from "@/components/ui/field"


export function AddPositionForm({newPosition,setNewPosition}: AddPositionFormProps){
   const selectCoinId = useCoinToolsStore(state => state.selectCoinId)
   const addPosition = useCoinToolsStore(state => state.addPosition)
   const selectCoin = useCoinStore(state => state.selectCoin)
   const addToPurchasedCoins = useCoinStore(state => state.addToPurchasedCoins)

    return (
      <Dialog>
         <form>
            <DialogTrigger className='w-full'>
               <Button
                     variant="outline"
                     className="shrink-0 w-full mt-2 py-2 cursor-pointer text-sm text-muted-foreground border border-dashed border-border rounded-lg hover:bg-muted transition-colors"
                  >
                  + Add position
               </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
               <DialogHeader>
                  <DialogTitle>Add position</DialogTitle>
               </DialogHeader>
               <FieldGroup>
                  <Field>
                     <Label htmlFor="name-1">Qty</Label>
                     <Input
                        type="number"
                        placeholder="0.00"
                        min={0}
                        onChange={e => setNewPosition({...newPosition, qty : Number(e.target.value)})}
                     />
                  </Field>
                  <Field>
                     <Label htmlFor="username-1">Price</Label>
                     <Input
                        type="number"
                        placeholder="0.00"
                        min={0}
                        onChange={e => setNewPosition({...newPosition, price : Number(e.target.value)})}
                     />
                  </Field>
                  <Field>
                     <Label htmlFor="username-1">Date</Label>
                     <Input
                        type="date"
                        defaultValue={newPosition.date}
                        onChange={e => setNewPosition({...newPosition, date : e.target.value})}
                     />
                  </Field>
               </FieldGroup>
               <Button className="w-auto mt-2" onClick={() => {addPosition(selectCoinId, newPosition); addToPurchasedCoins(selectCoin)} }>Ok</Button>
            </DialogContent>
         </form>
      </Dialog>
  )
}
