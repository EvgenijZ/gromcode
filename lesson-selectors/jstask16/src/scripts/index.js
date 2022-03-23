import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const createTask = () => {
    if (taskInput.value.length) {
        const tasks = getItem('tasksList') || [];
        const task = tasks.concat({ text: taskInput.value, done: false, id: Math.random() });
        setItem('tasksList', task);
        renderTasks();
        taskInput.value = null;
    }
}

createTaskBtn.addEventListener('click', createTask);

const updateStatusTask = () => {
    const listItemsCheckbox = document.querySelectorAll('.list__item-checkbox');

    listItemsCheckbox.forEach((item) => {
        item.addEventListener('click', (e) => {
            const tasks = getItem('tasksList');
            tasks.map((task) => {
                if (task.id == e.target.dataset.id) task.done = e.target.checked;
            });
            setItem('tasksList', tasks);
            renderTasks();
        });
    });
}

const renderTasks = () => {

    const tasksList = getItem('tasksList') || [];

    listElem.innerHTML = null;

    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.dataset.id = id;
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
    updateStatusTask();
};

renderTasks();

const onStorageChange = (e) => {
    if (e.key !== 'tasksList') return;
    renderTasks();
}

window.addEventListener('storage', onStorageChange);

document.addEventListener('DOMContentLoaded', renderTasks);
