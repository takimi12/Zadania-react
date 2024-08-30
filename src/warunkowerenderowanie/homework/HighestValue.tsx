type Props = {
    a:number;
    b:number;
    c:number;
}
type PropsObject = {
    props:Props
}

export const HighestValue = ({props}:PropsObject) => {

   const {a,b,c} = props;
   if( a> b && a>c) return <h1>{a}</h1>
   if( b>a && b>c ) return <h1>{b}</h1>
   if(c>a && c>b) return <h1>{c}</h1>

};
