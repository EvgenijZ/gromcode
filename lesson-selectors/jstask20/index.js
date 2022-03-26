import { getUserData, setUserAvatar } from './user.js';

setUserAvatar();

const nameFormBtn = document.querySelector('.name-form__btn');
nameFormBtn.addEventListener('click', getUserData);