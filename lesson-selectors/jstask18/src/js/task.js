import { getTask, getTasks, createTask, updateTask, deleteTask } from './taskGateway.js';

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');

export const createTaskItem = () => {

    if (!taskInput.value) return;

    createTask({ title: taskInput.value, done: false, createdAt: new Date().toISOString() })
        .then(_ => {
            renderTasks();
            clearInput();
        }).catch(error => console.error(new Error(error)));
}

const updateStatusTask = () => {
    const listItemsCheckbox = document.querySelectorAll('.list__item-checkbox');

    listItemsCheckbox.forEach((item) => {
        item.addEventListener('click', (e) => {
            const taskId = e.target.dataset.id;
            getTask(taskId)
                .then(task => {
                    task.done = e.target.checked;
                    return task;
                })
                .then(task => updateTask(task))
                .then(() => renderTasks())
                .catch(error => console.error(new Error(error)));

        });
    });
}

const removeTaskItem = () => {
    const listItemBtn = document.querySelectorAll('.list__item-btn');

    listItemBtn.forEach((item) => {
        item.addEventListener('click', (e) => {
            const taskId = e.target.dataset.id;
            deleteTask(taskId).then(() => renderTasks()).catch(error => console.error(new Error(error)));
        });
    });
}

const clearInput = () => taskInput.value = null;
const clearTasksListDOM = () => listElem.innerHTML = null;
const addTasksListDOM = (tasks) => listElem.append(...tasks);
const createListItem = (done) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    if (done) listItem.classList.add('list__item_done');
    return listItem;
}
const createListItemCheckbox = (done, id) => {
    const checkbox = document.createElement('input');
    checkbox.classList.add('list__item-checkbox');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.dataset.id = id;
    checkbox.checked = done;
    return checkbox;
}
const createListItemTitle = (text) => {
    const title = document.createElement('span');
    title.classList.add('list__item-title');
    title.textContent = text;
    return title;
}
const createListItemDeleteBtn = (id) => {
    const button = document.createElement('button');
    button.classList.add('list__item-btn');
    button.dataset.id = id;
    button.textContent = 'x';
    return button;
}

export const renderTasks = () => {

    clearTasksListDOM();

    getTasks().then(data => {
        const tasksElems = data.sort((a, b) => a.done - b.done)
            .map(({ title, done, id }) => {
                const listItemElem = createListItem(done);
                const checkbox = createListItemCheckbox(done, id);
                const titleSpan = createListItemTitle(title);
                const button = createListItemDeleteBtn(id);
                listItemElem.append(checkbox, titleSpan, button);
                return listItemElem;
            });

        addTasksListDOM(tasksElems || []);
        updateStatusTask();
        removeTaskItem();
    });

};

