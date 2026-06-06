import { useState } from 'react';
import { Todo } from '../../types';

const EMPTY_TODO: Todo = { id: '' , text : '', done : false, date : ''};

export function useTaskScheduler(){
   const [newCommit, setNewCommit] = useState<Todo>(EMPTY_TODO)

   function updateCommit(comitText: string){
      setNewCommit({
         ...newCommit, 
         text: comitText
      })
   }

   return {  newCommit, updateCommit }
} 





