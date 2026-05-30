import { TodoItempProps } from './type'

export function TodoItem({item, startEdit}: TodoItempProps){
   return(
      <li>
         {`${item.text}  Дата: ${new Date(item.date).toLocaleString()}`}
         <button onClick={() => startEdit(item.id, item.text)}>edit</button>
         <button>X</button> 
      </li> 
   )
}