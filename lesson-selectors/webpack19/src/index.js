import { initTaskHandler } from './list/handlers.js';
import { renderTasks } from './list/task.js';
import './index.scss';

initTaskHandler();

document.addEventListener('DOMContentLoaded', renderTasks);

const onStorageChange = (e) => ((e.key !== 'tasksList') ? null : renderTasks());
window.addEventListener('storage', onStorageChange);
