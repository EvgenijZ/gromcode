import { getUserRepos } from './repo.js';

const usersEndpoint = 'https://api.github.com/users/';
const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

export const setUserAvatar = (src) => {
    userAvatar.src = src || 'https://avatars3.githubusercontent.com/u10001';
}

const setUserBio = (name, location) => {
    userName.textContent = name;
    userLocation.textContent = location ? `from ${location}` : '';
}

export const getUserData = () => {
    const nameFormInput = document.querySelector('.name-form__input');
    if (!nameFormInput.value) return;
    return fetch(`${usersEndpoint}${nameFormInput.value}`).then(response => {
        if (!response.ok) alert('Failed to load data');
        return response.json();
    }).catch(err => console.error(err));
}

export const renderUser = (userData) => {
    const { avatar_url, name, location } = userData;
    setUserAvatar(avatar_url);
    setUserBio(name, location);
}