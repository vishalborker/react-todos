import {
    createTodo,
    removeTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure,
    markTodoAsCompleted,
} from './actions';

export const loadTodos = () => async dispatch => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:3000/todos');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text, isCompleted: false });
        const response = await fetch('http://localhost:3000/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = (id, todo) => async dispatch => {
    try {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'delete'
        });
        dispatch(removeTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const markTodoAsCompletedRequest = (id, todo) => async dispatch => {
    try {
        console.log(todo);
        const updateTodoRequest = {...todo, isCompleted: true}
        console.log({updateTodoRequest});
        await fetch(`http://localhost:3000/todos/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'put',
            body: JSON.stringify(updateTodoRequest),
        });
        dispatch(markTodoAsCompleted(updateTodoRequest));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => () => {
  console.log('Error => ', text);
};