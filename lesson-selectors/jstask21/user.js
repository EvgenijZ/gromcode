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

export const getUserData = async () => {
    const nameFormInput = document.querySelector('.name-form__input');
    if (!nameFormInput.value) return;
    const response = await fetch(`${usersEndpoint}${nameFormInput.value}`);
    if (!response.ok) throw new Error('Failed to load data');
    return await response.json();
}

export const renderUser = (userData) => {
    const { avatar_url, name, location } = userData;
    setUserAvatar(avatar_url);
    setUserBio(name, location);
}