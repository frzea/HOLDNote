import { useState } from 'react';
import { Todo } from '../types';
import { UpdateCoinTools } from './type' 

const EMPTY_TODO: Todo = { id: '' , text : '', done : false, date : ''};

export function useTaskScheduler(updateCoinTools: UpdateCoinTools){
   const [isEdit, setIsEdit] = useState<string>('');
   const [editCommit, setEditCommit] = useState<string>('');
   const [newCommit, setNewCommit] = useState<Todo>(EMPTY_TODO)

   function updateValCommit(comitText: string){
      setNewCommit({
         ...newCommit, 
         id : crypto.randomUUID(), 
         text: comitText, 
         date: new Date().toISOString()
      })
   }

   function handleAddCommit(){
      updateCoinTools((toolsData)=>({
         ...toolsData, 
         todos : [...toolsData.todos, newCommit]
      }))
      setNewCommit(EMPTY_TODO)
   }

   function handleEditCommit(id: string, commit: string){
      updateCoinTools((toolsData)=>({
         ...toolsData, 
         todos : toolsData.todos.map(dataid =>
            (dataid.id === id) 
            ? 
            {...dataid, text: commit, date: new Date().toISOString()} 
            : 
            dataid
         )
      }));
      setIsEdit('');    
   }

   return { 
      isEdit,
      editCommit,
      newCommit,
      setIsEdit, 
      setEditCommit,
      updateValCommit,
      handleAddCommit,
      handleEditCommit
   }
} 





