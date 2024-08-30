import React from 'react';

export const Zagniezdzanie = () => {

    const sampleArray = [
        {
        id:1,
        color:'red',
        size: {
            width:100,
            heiht:100
        }
    },
        {
            id:2,
            color:'blue',
            size: {
                width:100,
                heiht:100
            }
        },
            {
                id:3,
                color:'green',
                size: {
                    width:100,
                    heiht:100
            }
    }]

         


    return (
        <>
        <div>
            {sampleArray.map(el => (
                <div 
                key={el.id} 
                style=
                {{
                width: `${el.size.width}px`,
                height: `${el.size.heiht}px`,
                background: `${el.color}`                    
                }

                }>
                </div>
            ))}
        </div>

        </>
    );
};
