const repoListElem = document.querySelector('.repo-list');

export const getUserRepos = (url) => {
    return fetch(url).then(response => {
        if (!response.ok) alert('Failed to load data');
        return response.json();
    }).catch(err => console.error(err));
}

const createRepoElement = (name) => {
    const repoElem = document.createElement('li');
    repoElem.className = 'repo-list__item';
    repoElem.textContent = name;
    return repoElem;
}

export const renderUserRepo = (repos) => {
    if (!repos.length) return;

    clearRepoList();

    const rp = repos.map(({ name }) => {
        return createRepoElement(name);
    });

    repoListElem.append(...rp);
}

const clearRepoList = () => repoListElem.innerHTML = '';