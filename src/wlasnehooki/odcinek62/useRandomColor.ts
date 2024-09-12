

export const useRandomColor= (type:string) => {



    const returnWhiteColor = () => {
    
        const color1 = Math.floor(Math.random() * 105 + 150)
        const color2 = Math.floor(Math.random() * 105 + 150)
        const color3 = Math.floor(Math.random() * 105 + 150)
    
        return `rgb(${color1},${color2},${color3})`;
       }
    
       const returnBlackColor = () => {
        const color1 = Math.floor(Math.random() * 105 )
        const color2 = Math.floor(Math.random() * 105 )
        const color3 = Math.floor(Math.random() * 105 )
    
        return `rgb(${color1},${color2},${color3})`;
       }
    
    
    const Choose = () => {

        
    if (type === 'dark') {
        return  returnBlackColor();
    } else {
        return   returnWhiteColor();
    }
    }
    

    return  Choose
};
