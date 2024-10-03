import { Params } from "react-router-dom"
import { SingleInfo } from "../type"
import { apiCall } from "../utils/apiCall"

export const infosLoader = async ({params} : {params: Params<'id'>}) => {
    return apiCall<SingleInfo>(`infos/${params.id} `)
}