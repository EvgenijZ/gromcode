import { initTaskHandler } from './handlers.js';
import { renderTasks } from './task.js';

initTaskHandler();

document.addEventListener('DOMContentLoaded', renderTasks);

const onStorageChange = (e) => (e.key !== 'tasksList') ? null : renderTasks();
window.addEventListener('storage', onStorageChange);