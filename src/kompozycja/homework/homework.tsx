type Props = {
    title:string;
    children: React.ReactNode;

}


export const PageWrapper = ({children, title}:Props) => {
    
    return (
    
        <>
        <h1>{title}</h1>
        <div style={{
        maxWidth:'800px',
        margin:" 0 auto"
        }}>
        {children}
        </div>
        </>
    );
};
