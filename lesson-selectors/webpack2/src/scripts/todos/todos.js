export const tasks = [
    { text: 'Buy milk', done: false, id: 1 },
    { text: 'Pick up Tom from airport', done: false, id: 2 },
    { text: 'Visit party', done: false, id: 3 },
    { text: 'Visit doctor', done: true, id: 4 },
    { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const checkboxHandler = () => {
    const checkboxes = [...document.querySelectorAll('.list__item-checkbox')];
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            changeStatusTask(checkbox.closest('.list__item').dataset.id);
            checkboxHandler();
        });
    });
}

const createTaskHandler = () => {
    const createTaskBtn = document.querySelector('.create-task-btn');
    createTaskBtn.addEventListener('click', (e) => {
        const taskInput = document.querySelector('.task-input');
        if (taskInput.value) createTask(taskInput.value);
    });
}

const changeStatusTask = (id) => {
    const task = tasks.find(task => task.id === +id);
    task.done = !task.done;

    const taskElement = document.querySelector('.list__item[data-id="' + id + '"]');
    taskElement.classList.add('list__item_done');
    clearTasks();
    renderTasks(tasks);
}

export const sortedTasks = (tasks) => tasks.sort((a, b) => a.done - b.done);
const clearTasks = () => listElem.innerHTML = null;

export const createTask = (value) => {
    const newTask = { text: value, done: false, id: tasks.length + 1 };
    tasks.push(newTask);
    // clearTasks();
    // renderTasks(tasks);
    // checkboxHandler();
}

const renderTasks = tasksList => {

    const tasksElems = sortedTasks(tasksList)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = id;
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

// renderTasks(tasks);

// checkboxHandler();
// createTaskHandler();