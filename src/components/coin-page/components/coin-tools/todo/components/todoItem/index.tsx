import { TodoItempProps } from './type';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore';
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { MoreVerticalIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TodoItem({item, startEdit}: TodoItempProps){
   const {selectCoinId}  = useCoinToolsStore();
   const removeTodo  = useCoinToolsStore(store => store.removeTodo);
   const updateTodo  = useCoinToolsStore(store => store.updateTodo);

   return(
      <div >
       <FieldLabel>
        <Field orientation="horizontal" className="min-h-0">
          <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" checked={item.done} onCheckedChange={e => updateTodo(selectCoinId, item.id, {done : e})} className="size-3.5" />
          <FieldContent className="gap-0.5">
            <FieldTitle>{item.text}</FieldTitle>
            <FieldDescription className='text-[10px] leading-tight'>
              {new Date(item.date).toLocaleString()}
            </FieldDescription>
          </FieldContent>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-0.5">
                <MoreVerticalIcon className="size-3.5"/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => startEdit(item.id, item.text)} >Edit</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => removeTodo(selectCoinId, item.id)} >Delete</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
        </Field>
      </FieldLabel>
      </div>
   )
}
