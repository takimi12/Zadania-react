import React from 'react';

export const Zagniezdzanie1 = () => {

    let text = 'Lorem ipsum'

    let arrayText =[];
  
   
    for( let i=0; i < text.length; i++){
  
          arrayText.push(text[i])
  
    }         


    return (
        <>
        <div>
            <ul>
                {
                    arrayText.map((el, index)=> (
                        <li key={index}>{index % 2 === 0 ? el.toLowerCase() : el.toUpperCase()  }</li>
                        
                    ))
                }                
            </ul>
         
        </div>

        </>
    );
};
