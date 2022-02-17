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

    const items = tasksList.sort((a, b) => a.done - b.done).map(({ text, done }) => {
        const li = document.createElement('li');
        li.classList.add.apply(
            li.classList,
            done ? ['list__item', 'list__item_done'] : ['list__item']
        );

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