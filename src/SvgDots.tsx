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
      <g width='500' height='500'>
        {dots.map(([x, y],idx) => ( //number number 형식으로 받아올 것이고
          <circle key={idx} cx={x} cy={y} r="2" fill="#aaa" /> //cx cy 로 좌표 찍네
        ))}
      </g>
    );
  };