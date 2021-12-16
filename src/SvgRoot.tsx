import { atom, useAtom } from "jotai";
import { dotsAtom } from "./App";
import { SvgDots } from "./SvgDots";


type Point = [number, number];
// const dotsAtom = atom<Point[]>([]);
const numberOfDotsAtom = atom(
    (get) => get(dotsAtom).length
);


export const SvgRoot = () => {
    const [, setDots] = useAtom(dotsAtom);
    return (
    <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        onMouseMove={(e) => {
          const p: Point = [e.clientX, e.clientY];
          setDots((prev) => [...prev, p]);
        }}
      >
        <rect width="500" height="500" fill="#eee" />
        <SvgDots />
      </svg>
    );
  };