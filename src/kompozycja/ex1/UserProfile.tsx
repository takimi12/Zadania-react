
type Email = {
    email:string;
}

export const UserProfile = ({email}:Email) => {
    return (
        <>
    {email}
        </>
    );
};
