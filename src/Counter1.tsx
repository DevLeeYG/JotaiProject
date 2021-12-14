import React from 'react';
import {atom, useAtom} from 'jotai'



export const countAtom = atom(0)

const Counter1 = () => {
   
   const [count,setCount] = useAtom(countAtom)
    return (
       
        <div>
            {count}
            <button
            onClick={()=>setCount(c=>c+1)}
            >
                +1
            </button>
        </div>
  
      
    );
};

export default Counter1;