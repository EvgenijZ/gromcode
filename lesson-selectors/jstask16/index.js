import storage from './storage.js';

document.addEventListener('DOMContentLoaded', storage.init());

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const createTask = () => {
    if (taskInput.value.length) {
        const tasks = storage.getTasks();
        tasks.push({ text: taskInput.value, done: false, id: storage.getTasks().length + 1 });
        storage.setTasks(tasks);
        renderTasks(storage.getTasks());
        taskInput.value = null;
    }
}

createTaskBtn.addEventListener('click', createTask);

const updateStatusTask = () => {
    const listItemsCheckbox = document.querySelectorAll('.list__item-checkbox');

    listItemsCheckbox.forEach((item) => {
        item.addEventListener('click', (e) => {
            const tasks = storage.getTasks();
            tasks.map((task) => {
                if (task.id == e.target.dataset.id) task.done = e.target.checked;
            });
            storage.setTasks(tasks);
            renderTasks(storage.getTasks());
        });
    });
}

const renderTasks = tasksList => {

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

renderTasks(storage.getTasks());

window.addEventListener('storage', () => renderTasks(storage.getTasks()));

// put your code here
