import { Link, useSubmit } from "react-router-dom"
import { SingleInfo} from "./type"

type InfoProps = {
    info:SingleInfo
}

export const Info = ({info}: InfoProps) => {
    const submit = useSubmit()

    const handleDelete = () => {
        submit({
            id: info.id
        }, {
            method: 'DELETE',
            action: '/'
        })
    }
 
    return (
        <li>
        <h2>{info.title}</h2>
        <button onClick={handleDelete}>Delete</button>
        <Link to={info.id}>Edit</Link>
        </li>
    )
}