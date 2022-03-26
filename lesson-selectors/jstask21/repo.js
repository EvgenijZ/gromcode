const repoListElem = document.querySelector('.repo-list');

export const getUserRepos = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to load data');
    return response.json();
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