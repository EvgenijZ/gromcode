import { createTaskItem } from './task.js';

export const initTaskHandler = () => {
  const createTaskBtn = document.querySelector('.create-task-btn');
  createTaskBtn.addEventListener('click', createTaskItem);
};
