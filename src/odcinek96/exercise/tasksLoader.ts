import { apiCall } from "./apiCall"

export const tasksLoader = async () => {
    return apiCall('tasks')
}