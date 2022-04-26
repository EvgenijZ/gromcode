import { getTodos, createTodo, deleteTodo, updateTodo } from './todo.gateway';
export const GET_TODO = 'TODO/GET';
export const CREATE_TODO = 'TODO/CREATE';
export const REMOVE_TODO = 'TODO/REMOVE';
export const UPDATE_TODO = 'TODO/UPDATE';

export const getTodo = (todo) => {
    return {
        type: GET_TODO,
        payload: todo
    }
}

export const onCreateTodo = (todo) => {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}

export const onRemoveTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export const onUpdateTodo = (id, data) => {
    return {
        type: UPDATE_TODO,
        payload: { id, data }
    }
}

export const fetchTodo = () => (dispatch) => getTodos().then(todos => dispatch(getTodo(todos)));
export const create = (data) => (dispatch) => createTodo(data).then(todo => dispatch(onCreateTodo(todo)));
export const remove = (id) => (dispatch) => deleteTodo(id).then(todo => dispatch(onRemoveTodo(todo.id)));
export const update = (id, data) => (dispatch) => updateTodo(id, data).then(todo => dispatch(onUpdateTodo(id, data)));