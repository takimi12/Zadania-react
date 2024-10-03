import { SingleInfo } from "../type"
import { apiCall } from "../utils/apiCall"

export const infosLoader = async () => {
    return apiCall<SingleInfo[]>('infos ')
}