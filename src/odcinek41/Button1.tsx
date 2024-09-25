type Props = {
    onClick: (which: string) => void;
    label:string;
}


export const HomwewrokButton = ({onClick, label}:Props) =>{

    return <button onClick={() => onClick(label)}>{label}</button>
}