import React, { useRef, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {


  addRectangle,
} from './panelSlice';
import styles from './panel.module.css';
import Canvas from './Canvas';

export function Panel() {
  const dispatch = useAppDispatch();

  return (
    <>
          <Canvas />
      <button
        className={styles.button}
        aria-label="Add Rectangle"
        onClick={() => dispatch(addRectangle({
          color: "#000",
          width: 100,
          height: 50,
          x: Math.floor(Math.random() * 400),
          y: Math.floor(Math.random() * 400),
        }))}
      >Add Rectangle</button>

    </>
  );
}

