
import { useAtom } from 'jotai';
import { countAtom } from './Counter1';
const Counter2 = () => {
   const [count] = useAtom(countAtom)
    return (
      
        <div>
            {count}
         </div>
      
    );
};

export default Counter2;