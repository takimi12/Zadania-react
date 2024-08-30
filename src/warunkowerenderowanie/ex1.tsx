import { useEffect, useState } from "react";

export const Render = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000); 


    return () => {
      clearInterval(intervalId);
    };
  }, []);


  // if(  counter % 2  === 0 )    return  <p> 'Hello world1'</p>
  return (<div>
<p>{  counter % 2  === 0 ? 'Hello World ' : null}</p>
</div>
)
};
