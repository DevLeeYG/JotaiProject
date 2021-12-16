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
        width="200"
        height="200"
        viewBox="0 0 200 200"
        onMouseMove={(e) => {
          const p: Point = [e.clientX, e.clientY];
          setDots((prev) => [...prev, p]);
        }}
      >
        <rect width="200" height="200" fill="#eee" />
        <SvgDots />
      </svg>
    );
  };