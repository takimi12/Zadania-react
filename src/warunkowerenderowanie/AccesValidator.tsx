// type UserData = {
//     names?: string;
//     lastName?: string;
//     age?: number;
//   }
  
//   export const AccessValidator = ({ props }: { props: UserData }) => {
   
//     // if(props === undefined ) return undefined;
//     if(props !== undefined) {
//         if( props.names === "" || props.lastName === ""){
//             return  <p>"Chyba się znamy, a moze nie do konca?"</p>
//         }
//     }
    
//   };
  
type UserData = {
    names?: string;
    lastName?: string;
    age?: number;
  };
  
  type AccessValidatorProps = {
    user?: UserData;
  };
  
  export const AccessValidator = ({ user }: AccessValidatorProps) => {
    if (!user) return <p>witaj nieznajomy</p>;
  
    const { names, lastName, age } = user;
   
    if (!names || !lastName) return <p>chyba sie nie znamy</p>;

    if(!age) return <p> Nie wiem czy mogę cię tutaj wpuścić</p>

    if(  age < 18) return <p> Witaj {names}, {lastName}, zapraszam do ograniczonej wersji serwisu</p>

    return <h1>Witaj {names} {lastName}, zapraszam do pełnej wersji serwisu</h1>



  };
  
  