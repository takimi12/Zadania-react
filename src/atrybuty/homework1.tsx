

export const AtributesHomeWork1 = () => {

    function randomColor ():string {
        const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

        const randomIndex = Math.floor((Math.random() * colors.length));

    
        return colors[randomIndex];
    }



    return (
        <>
        <div className="d" style={{
            height: '100px',
            width:'100px',
            backgroundColor: randomColor(),
        }}>
        </div>

        </>
    );
};



 