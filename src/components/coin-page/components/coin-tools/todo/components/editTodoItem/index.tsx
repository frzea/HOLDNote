import { EditTodoItemProps } from "./type";
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/components/ui/field"


export function EditTodoItem({item, editState, updateText, stopEdit} : EditTodoItemProps){
   const selectCoinId = useCoinToolsStore(state => state.selectCoinId)
   const updateTodo = useCoinToolsStore(state => state.updateTodo)
   
   return(
      <div key={item.id}>
      <FieldLabel>
        <Field orientation="horizontal">
          <FieldContent>
            <Textarea
              value={editState.text ?? ''}
              onChange={e => updateText(e.target.value)}
            />
          </FieldContent>
          <div className="flex flex-col gap-1">
            <Button variant="outline" onClick={()=> {updateTodo(selectCoinId, item.id, {text : editState?.text ?? item.text, date: new Date().toISOString()}); stopEdit()}}>Save</Button>
            <Button variant="outline" onClick={stopEdit}>Esc</Button> 
          </div>
        </Field>
      </FieldLabel>
      </div>
   )
}