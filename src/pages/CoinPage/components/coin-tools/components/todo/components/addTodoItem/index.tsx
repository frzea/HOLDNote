import { Todo } from "@/models/types/types";
import { useCoinToolsStore } from '@/store/CoinToolsStore';
import { Textarea } from "../ui/textarea"
import { Button } from "@/components/ui/button"

interface AddTodoItemProps{
   newCommit: Todo
   updateCommit: (comitText: string) => void
   toggle: () => void
}

export function AddTodoItem({newCommit, updateCommit, toggle} : AddTodoItemProps){
   const selectCoinId = useCoinToolsStore(store => store.selectCoinId);
   const addTodo = useCoinToolsStore(store => store.addTodo);

   return(
      <div className='flex flex-col gap-2'>
         <Textarea
            className="w-full"
            value={newCommit.text}
            onChange={e => updateCommit(e.target.value)}
         />
          <Button className="w-auto mt-2" onClick={() => {addTodo(selectCoinId, newCommit); toggle();}}>Add</Button>
      </div>
   )
}