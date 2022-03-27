import { getUserData, setUserAvatar, renderUser } from './user.js';
import { getUserRepos, renderUserRepo } from './repo.js';
import { showSpinner, hideSpinner } from './spinner.js';

const nameFormBtn = document.querySelector('.name-form__btn');

setUserAvatar();


const onSearchUser = async () => {
    showSpinner();

    try {
        const userData = await getUserData();
        await renderUser(userData);
        const { repos_url } = userData;
        const userRepos = await getUserRepos(repos_url);
        await renderUserRepo(userRepos);
    } catch (e) {
        alert('Failed to load data');
    } finally {
        hideSpinner();
    }
}

nameFormBtn.addEventListener('click', onSearchUser);