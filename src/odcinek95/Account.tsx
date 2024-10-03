import { useEffect } from "react";
import { Form, useFetcher, useSubmit } from "react-router-dom"

export const Account = () => {
    const submit = useSubmit();
    const fetcher = useFetcher()

    const hadnleSubmit = () => {
        submit({
            title: 'lorem ipsum'
        }, {
            action: '/create',
            method: 'post'
        })
    }


    useEffect(() => {
if (fetcher.state === 'loading') return

console.log('Data', fetcher.formData?.get('title'))
}, [fetcher])

    return (
        <div>
        <h1>Account</h1>
        <Form method="post" action="/create">
            <input type="text" name="title" />
            <button type="submit">Create</button>
        </Form>
        <fetcher.Form method="post" action="/create">
            <input type="text" name="title" />
            <button type="submit">Create</button>
        </fetcher.Form>

        <button type='button' onClick={hadnleSubmit}>Submit with useSubmit()</button>

        </div>
    )
}