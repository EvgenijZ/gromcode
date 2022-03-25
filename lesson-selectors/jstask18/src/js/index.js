import { getTasks } from './taskGateway.js';
import { setItem } from './storage.js';
import { initTaskHandler } from './handlers.js';
import { renderTasks } from './task.js';

initTaskHandler();

document.addEventListener('DOMContentLoaded', getTasks().then(data => {
    setItem('tasksList', data);
    renderTasks();
}));

const onStorageChange = (e) => (e.key !== 'tasksList') ? null : renderTasks();
window.addEventListener('storage', onStorageChange);