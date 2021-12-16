import { atom, Provider, useAtom } from "jotai";
import { SvgRoot } from "./SvgRoot";


type Point = [number, number];

export const dotsAtom = atom<Point[]>([]);

const numberOfDotsAtom = atom(
  (get) => get(dotsAtom).length
);



const Stats = () => {
  const [numberOfDots] = useAtom(numberOfDotsAtom);
  return (
    <ul>
      <li>Dots: {numberOfDots}</li>
    </ul>
  );
};

const App = () => (
  <>
    <SvgRoot />
    <Stats />
  </>
);

export default App;
