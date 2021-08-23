import React, { useRef, useState,useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
getGate,
getEvent,
  getResult,
  checkDimension,
  PolygonInputState,
} from './polygonSlice';
import styles from './polygon.module.css'; 

export function Polygon() {
  const dispatch = useAppDispatch();
  const result = useAppSelector(getResult);
  const events = useAppSelector(getEvent);
  const gate = useAppSelector(getGate);
  const dimensionX= 2;
  const dimensionY= 3;

  
  useEffect(() => {
    if(result.length >0)
    alert(result);
  }, [result])
  return (
    <>
      <button
        className={styles.button}
        aria-label="Check Point in Polygon"
        onClick={() => dispatch(checkDimension({events,gate,dimensionX,dimensionY} as PolygonInputState))}
      >Check Point in Polygon</button>
      
    </>
  );
}

