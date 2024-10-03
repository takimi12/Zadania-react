export const tasksLoader = async () => {
    return fetch('http://localhost:3000/tasks')
}