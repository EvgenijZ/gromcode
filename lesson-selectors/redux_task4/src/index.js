import store, { decrement, increment, reset } from './store.js';
import './index.scss';

const decrementBtn = document.querySelector('.counter__button[data-action="decrement"]');
const incrementBtn = document.querySelector('.counter__button[data-action="increment"]');
const resetBtn = document.querySelector('.counter__button[data-action="reset"]');
const counterResult = document.querySelector('.counter__result');

const onDecrementClick = () => store.dispatch(decrement());
const onIncrementClick = () => store.dispatch(increment());
const onResetClick = () => store.dispatch(reset());
decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);
resetBtn.addEventListener('click', onResetClick);

store.subscribe(() => {
    const { history } = store.getState();
    const result = history.reduce((acc, item) => acc + item, 0);
    counterResult.textContent = `${history.map(item => {
        return Math.sign(item) !== -1 ? `+${item}` : item;
    }).join(' ')} = ${result}`;
    if (result === 0) counterResult.textContent = '';
});