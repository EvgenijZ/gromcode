const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const nameFormInput = document.querySelector('.name-form__input');
const nameFormBtn = document.querySelector('.name-form__btn');
const githubAPIURL = 'https://api.github.com/users';

const renderUserInfo = (info) => {
    userName.textContent = info.name;
    userAvatar.src = info.avatar_url;
    userLocation.textContent = 'from ' + (info.location || 'localhost');
}

const fetchUser = () => {
    const userName = nameFormInput.value;
    if (!userName.length) return;

    fetch(`${githubAPIURL}/${userName}`)
        .then(response => response.json())
        .then(data => {
            const { avatar_url, name, location } = data;
            renderUserInfo({ avatar_url, name, location });
        })
        .catch(err => console.error(new Error(err)));
}

nameFormBtn.addEventListener('click', fetchUser);