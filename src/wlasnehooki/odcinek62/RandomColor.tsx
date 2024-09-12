import { useRandomColor } from "./useRandomColor"
export const RandomColor = () => {

      
    const RandomColor = () => {
        const choose = Math.floor(Math.random() * 2);
        if (choose === 0) {
            return  'dark';
        } else {
            return   'white';
        }
        }

    
    const random = RandomColor();
    const  Choose =  useRandomColor(random);


 

    return (
        <>
        <p style={{color: `${Choose()}`}}>ddd</p>
        </>
    )
  }
  
  
  