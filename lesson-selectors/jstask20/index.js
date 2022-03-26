import { getUserData, setUserAvatar, renderUser } from './user.js';
import { getUserRepos, renderUserRepo } from './repo.js';
import { showSpinner, hideSpinner } from './spinner.js';

const nameFormBtn = document.querySelector('.name-form__btn');

setUserAvatar();

const onSearchUser = () => {
    showSpinner();

    return getUserData().then(data => {
        renderUser(data);
        return data;
    }).then(({ repos_url }) => getUserRepos(repos_url))
        .then(data => {
            renderUserRepo(data);
            return data;
        })
        .catch(err => console.error(err))
        .finally(() => hideSpinner());
}

nameFormBtn.addEventListener('click', onSearchUser);