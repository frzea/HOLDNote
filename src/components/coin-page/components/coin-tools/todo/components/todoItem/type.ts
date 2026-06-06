import { Todo } from "../../../types";

export interface TodoItempProps {
    item: Todo
    startEdit: (id: string, text: string) => void
}