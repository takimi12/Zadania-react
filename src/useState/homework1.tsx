import React, { useState } from 'react';

const MousePositionTracker: React.FC = () => {

    const[position, setPosition] = useState<{mouseX: number, mouseY:number}>({mouseX:0, mouseY:0})
    

    const handleMouseMove = (e: React.MouseEvent) => {
        console.log(e,'e')
         const mouseX = e.clientX
        const mouseY = e.clientY

        setPosition({
            mouseX,mouseY
        })

    }


    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                width: 500,
                height: 500,
                border: '1px solid red',
                padding: 10,
            }}
        >
        X: {position.mouseX}
        Y: {position.mouseY}
        </div>
    );
};

export default MousePositionTracker;
