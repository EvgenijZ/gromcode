import { GET_TODO, CREATE_TODO, UPDATE_TODO, REMOVE_TODO } from './todo.actions';

const initialState = {
    todosList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO:
            return {
                ...state,
                todosList: action.payload
            }
        case CREATE_TODO: {
            return {
                ...state,
                todosList: [action.payload].concat(state.todosList)
            }
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todosList: state.todosList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, ...action.payload.data }
                    }
                    return todo;
                })
            }
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todosList: state.todosList.filter(todo => todo.id !== action.payload)
            }
        }
        default:
            return state;
    }
}