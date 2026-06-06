import { Todo } from "../../../types";
import { EditState } from '../../type' 

export interface EditTodoItemProps{
    item: Todo
    editState: EditState
    updateText: (text: string) => void
    stopEdit: ()=> void
}

