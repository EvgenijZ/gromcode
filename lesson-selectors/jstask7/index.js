'use strict';

const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
    const list = document.querySelector('.list');

    const items = tasksList.map(({ text, done }) => {
        console.log(text);
        const li = document.createElement('li');
        li.classList.add('list__item');

        if (done) {
            li.classList.add('list__item_done');
        }

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = done;
        checkbox.classList.add('list__item-checkbox');

        li.append(checkbox, text);

        return li;
    });

    list.append(...items);
};

renderTasks(tasks);