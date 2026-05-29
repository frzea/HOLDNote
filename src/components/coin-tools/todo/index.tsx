import { TodoProps } from "./type";
import { useTaskScheduler } from './useTaskScheduler'

export function TaskScheduler({CoinToolsData, updateCoinTools}: TodoProps){
   const { 
      isEdit, 
      editCommit, 
      newCommit, 
      setIsEdit, 
      setEditCommit, 
      updateValCommit, 
      handleAddCommit, 
      handleEditCommit
   } = useTaskScheduler(updateCoinTools);

   return(
      <>
         PLAN 
         <input type="text" value={newCommit.text} onChange={e => updateValCommit(e.target.value)}/> 
         <button onClick={()=> {handleAddCommit()}}>Add</button>
         <hr/>
         {CoinToolsData.todos?.map(item =>
               (isEdit === item.id) ? 
               <div>
                  <input type="text" value={editCommit} onChange={e=> setEditCommit(e.target.value)}/>
                  <button onClick={()=> {handleEditCommit(item.id, editCommit)}}>save</button>
                  <button onClick={()=> setIsEdit('')}>esc</button> 
               </div>
               :
               <li key={item.id}>
                  {`${item.text}  Дата: ${new Date(item.date).toLocaleString()}`}
                  <button onClick={()=>{setIsEdit(item.id); setEditCommit(item.text)}}>edit</button>
                  <button>X</button> 
               </li>      
         )}
      </>
   )
}
