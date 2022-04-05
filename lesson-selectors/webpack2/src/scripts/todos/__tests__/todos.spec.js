import { tasks, sortedTasks, createTask } from '../todos';

it('should return sorted array tasks', () => {
    const result = [
        { text: 'Buy milk', done: false, id: 1 },
        { text: 'Pick up Tom from airport', done: false, id: 2 },
        { text: 'Visit party', done: false, id: 3 },
        { text: 'Visit doctor', done: true, id: 4 },
        { text: 'Buy meat', done: true, id: 5 },
    ];
    expect(sortedTasks(tasks)).toEqual(result);
});

it('should return the last created task', () => {
    const result = { text: 'Test task', done: false, id: 6 };
    createTask('Test task');
    expect(tasks[tasks.length - 1]).toEqual(result);
});