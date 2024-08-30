import React from 'react';

export const AtributesHomeWork2 = () => {


        let backgroundColor = prompt('Podaj kolor w postaci szesnastkowej');
        let content = "";

        if (backgroundColor?.length !== 7) {
            backgroundColor = 'black';
            content = 'niepoprawny kolor';
        } 

         


    return (
        <>
            <div className="d" style={{
                height: '100px',
                width: '100px',
                backgroundColor: backgroundColor, 
                color:'red',
            }}>
                {content}
            </div>
        </>
    );
};
