const TODO_API_ENDPOINT = 'https://623cf2c17efb5abea688e73d.mockapi.io/api/v1/tasks';

export const getTodos = async () => {
    try {
        const response = await fetch(TODO_API_ENDPOINT);
        if (!response.ok) throw new Error("Error fetching todos");
        return response.json();
    } catch (e) {
        alert(e);
    }
}

export const createTodo = async (data) => {
    try {
        const response = await fetch(TODO_API_ENDPOINT, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Error creating todo");
        return response.json();
    } catch (e) {
        alert(e);
    }
}

export const updateTodo = async (id, data) => {
    try {
        const response = await fetch(`${TODO_API_ENDPOINT}/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Error updating todo");
        return response.json();
    } catch (e) {
        alert(e);
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${TODO_API_ENDPOINT}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error("Error deleting todo");
        return response.json();
    } catch (e) {
        alert(e);
    }
}