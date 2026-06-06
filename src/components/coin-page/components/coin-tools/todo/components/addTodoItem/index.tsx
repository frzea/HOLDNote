import { AddTodoItemProps } from "./type";
import { useCoinStore } from '../../../../../../../store/CoinStore';
import { useCoinToolsStore } from '../../../../../../../store/CoinToolsStore';

export function AddTodoItem({newCommit, updateCommit} : AddTodoItemProps){
   const { selectCoinId } = useCoinStore();
   const { addTodo } = useCoinToolsStore();
   return(
      <>
         PLAN 
         <input type="text" value={newCommit.text} onChange={e => updateCommit(e.target.value)}/> 
         <button onClick={() => addTodo(selectCoinId, newCommit)}>Add</button>
      </>
   )
}