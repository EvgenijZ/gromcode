// localStorage.clear();

export default {
    plus: function () {
        let counter = +localStorage.getItem('counter');
        localStorage.setItem('counter', counter += 1);
    },
    minus: function () {
        let counter = +localStorage.getItem('counter');
        localStorage.setItem('counter', counter -= 1);
    },
    init: function () {
        if (!localStorage.getItem('counter')) localStorage.setItem('counter', 0);
    },
    getCounter: function () { return +localStorage.getItem('counter') }
}