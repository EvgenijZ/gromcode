import storage from './storage.js';

const counterDOM = document.querySelector('.counter');

const btnClick = (e) => {
    const btnAction = e.target.dataset.action;

    if (btnAction === 'minus') storage.minus();
    if (btnAction === 'plus') storage.plus();

    updateCounterDOM();
}

const loadStorage = () => {
    storage.init();
    updateCounterDOM();
}

const updateCounterDOM = () => {
    const counterText = document.querySelector('.counter__text');
    counterText.textContent = storage.getCounter();
}

counterDOM.addEventListener('click', btnClick);
document.addEventListener('DOMContentLoaded', loadStorage);
window.addEventListener('storage', loadStorage);

