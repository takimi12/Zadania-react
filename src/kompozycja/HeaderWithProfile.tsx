import { UserProfile } from "./ex1/UserProfile";
import { Header } from "./ex1/Header";

export const Kompozycja = () => {
let email = 'emails';
    
    return (
    
        <>
        <Header title="title">
        <UserProfile email={email} />
        </Header>
        </>
    );
};
