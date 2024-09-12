export type Todo = {
    id:string;
    title: string;
}

export type SubTodo = Todo & {
    todoId: string;
}

export type TodoWitthSubTodos = Todo & {
subtodos: SubTodo[];
}

export type TodoDto = {
    title: string;
}