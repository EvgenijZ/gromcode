// localStorage.clear();

export default {
    setTasks: function (tasks) {
        localStorage.setItem('tasksList', JSON.stringify(tasks));
    },
    getTasks: function () { return JSON.parse(localStorage.getItem('tasksList')) },
    clearTasks: function () {
        localStorage.setItem('tasksList', JSON.stringify([]));
    },
    init: function () {
        if (!localStorage.getItem('tasksList')) localStorage.setItem('tasksList', JSON.stringify([]));
    },
}