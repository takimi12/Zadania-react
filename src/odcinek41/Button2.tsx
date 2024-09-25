type Props = {
    onClick: () => void;
    label:string;
}


export const HomwewrokButtonSecondary = ({onClick, label}:Props) =>{

    return <button onClick={() => onClick}>{label}</button>
}