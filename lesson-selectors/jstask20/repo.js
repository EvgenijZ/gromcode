import { showSpinner, hideSpinner } from './spinner.js';

const repoListElem = document.querySelector('.repo-list');

export const getUserRepos = (url) => {
    return fetch(url).then(response => {
        if (!response.ok) alert('Failed to load data');
        return response.json();
    }).then(data => {
        renderUserRepo(data);
        return data;
    }).catch(err => console.error(err));
}

const createRepoElement = (name) => {
    const repoElem = document.createElement('li');
    repoElem.className = 'repo-list__item';
    repoElem.textContent = name;
    return repoElem;
}

const renderUserRepo = (repos) => {
    if (!repos.length) return;

    clearRepoList();

    repos.map(({ name }) => {
        repoListElem.append(createRepoElement(name));
    });
}

const clearRepoList = () => repoListElem.innerHTML = '';