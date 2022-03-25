const endpointTasks = 'https://623cf2c17efb5abea688e73d.mockapi.io/api/v1/tasks';

export const getTasks = () => fetch(endpointTasks).then(response => response.json()).then(tasks => tasks);

export const createTask = (taskData) => fetch(endpointTasks, {
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    method: 'POST',
    body: JSON.stringify(taskData)
}).then(response => response.json());

export const updateTask = (taskData) => fetch(`${endpointTasks}/${taskData.id}`, {
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    method: 'PUT',
    body: JSON.stringify(taskData)
}).then(response => response.json());

export const deleteTask = (id) => fetch(`${endpointTasks}/${id}`, {
    method: 'DELETE'
});