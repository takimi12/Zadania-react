type Props= {
    title:string;
    text:string;
    controls:React.ReactNode;

}

export const Modal = ({title, text, controls}:Props) => {
    
    return (
    
        <>
<div
style={{
    borderRadius:5,
    border: "1px solid #eee",
    maxWidth: 400,
    margin: "25px auto"
}}

>
    <header style={{
        padding:20,
        borderBottom: "!px solid #f0f0f0"
    }}
    
    >
        <h2>{title}</h2>
    </header>
    <section
    style={{
        padding:20,
    }}
    >
        {text}
    </section>
    <footer style={{
        padding:20,
        borderTop: "1px solid #f0f0f0"
    }}>
        {controls}
    </footer>
</div>

        </>
    );
};
