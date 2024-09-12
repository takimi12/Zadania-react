import {memo} from 'react'

type GrandChild = {
  array: number[];
}

export const GrandChild = memo(({array}: GrandChild) => {

  
    return (
      <h3> Child {array.join(', ' )}</h3>
    );
})
  