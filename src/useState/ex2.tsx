import React, { useState, ReactElement, CSSProperties, useEffect } from "react";





export const Example2 = () => {
    const [squareNumber, setSquareNumber] = useState(0);
    const [divs, setDivs] = useState<ReactElement[]>([]);
// Funkcja generująca losowy kolor w formacie hex
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Funkcja generująca losowy styl obramowania
const getRandomBorder = () => {
    const styles = ['solid', 'dashed', 'dotted', 'double'];
    const width = Math.floor(Math.random() * 10) + 1; // szerokość od 1px do 10px
    const style = styles[Math.floor(Math.random() * styles.length)];
    return `${width}px ${style} ${getRandomColor()}`;
};

    const square = () => {
        setSquareNumber(squareNumber + 1);
        
        // Generowanie losowych wartości dla kwadratu
        const bok = Math.floor(Math.random() * 200); 
        const background = getRandomColor();
        const border = getRandomBorder(); 
        const XY = Math.floor(Math.random() * 200); 
        const rotation = Math.floor(Math.random() * 360); 

        // Ustawianie stylu dla nowego kwadratu
        const newSquareStyle: CSSProperties = {
            width: `${bok}px`,
            height: `${bok}px`,
            backgroundColor: background,
            border: border,
            position: "absolute",
            top: `${XY}px`,
            left: `${XY}px`,
            transform: `rotate(${rotation}deg)`,
        };

        // Dodanie nowego div do stanu divs
        setDivs([...divs, <div key={squareNumber} style={newSquareStyle}></div>]);
    };
    const [intervalTime, setIntervalTime] =  useState(1000)

    // useEffect(() =>{
    // const interval = setInterval(() => {
    //     square()
        
    //     }, intervalTime )

    // }, [])

    // useEffect(() =>{
    //     setInterval(() => {
    //         square()
    //     },1000)
    //         }, [])
    return (
        <>
            <button onClick={square}>Add Square</button>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                {divs.map((div, index) => (
                    <div key={index}>{div}</div>
                ))}
                {divs}
            </div>
        </>
    );
};
// import { useState } from "react";

// type SingleBox = {
//   size: number;
//   x: number;
//   y: number;
//   rotation: number;
//   color: string;
//   borderRadius: number;
// };

// export const Example2 = () => {
//   const [boxes, setBoxes] = useState<SingleBox[]>([]);

//   const addBox = () => {
//     const x = Math.round(Math.random() * 100);
//     const y = Math.round(Math.random() * 100);
//     const size = Math.round(Math.random() * 500);
//     const rotation = Math.round(Math.random() * 360);
//     const borderRadius = Math.round(Math.random() * 30);
//     const r = Math.round(Math.random() * 255);
//     const g = Math.round(Math.random() * 255);
//     const b = Math.round(Math.random() * 255);

//     const newBox: SingleBox = {
//       x,
//       y,
//       size,
//       rotation,
//       borderRadius,
//       color: `rgb(${r},${g},${b})`,
//     };

//     setBoxes((prevBoxes) => [...prevBoxes, newBox]);
//   };

//   return (
//     <>
//       <button onClick={addBox}> Add random box</button>
//       <div
//         style={{
//           position: "relative",
//           width: 500,
//           height: 500,
//           border: "1px solid black",
//           overflow: "hidden",
//         }}
//       >
//         {boxes.map((box, index) => (
//           <div
//             key={index}
//             style={{
//               position: "absolute",
//               width: `${box.size}px`,
//               height: `${box.size}px`,
//               left: `${box.x}px`,
//               top: `${box.y}px`,
//               transform: `rotate(${box.rotation}deg)`,
//               backgroundColor: box.color,
//               borderRadius: `${box.borderRadius}%`,
//             }}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
