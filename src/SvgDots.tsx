import React from 'react';
import { atom, useAtom } from "jotai";
import { dotsAtom } from './App';

type Point = [number, number];

// const dotsAtom = atom<Point[]>([]);

// const numberOfDotsAtom = atom(
//   (get) => get(dotsAtom).length
// );


export const SvgDots = () => {
    const [dots] = useAtom(dotsAtom);
    return (
      <g>
        {dots.map(([x, y],idx) => (
          <circle key={idx} cx={x} cy={y} r="2" fill="#aaa" />
        ))}
      </g>
    );
  };