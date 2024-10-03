import { apiCall } from "./apiCall";
import { SingleTaskDto } from "./tasks";

export const addTaskAction = async ({request} : {request: Request}) => {
    const formData = await request.formData();
    const title = formData.get('title')?.toString();
    const description = formData.get('description')?.toString()

    return apiCall<SingleTaskDto>('tasks', {
        method: 'POST',
        body: {
            title: title || '',
            description: description || ''
        }
    })


}