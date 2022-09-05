import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __getTimer } from "../redux/modules/timer";



interface returnValue {
  count : number,
  start : ()=>void,
  stop : ()=>void
}

// 사용자 정의 hook
export const useCounter = (initialValue:number, ms:number) => {
  // const timer = useSelector((state) => state);
  const [count, setCount] = useState<number>(initialValue);
  const dispatch = useDispatch();
  const intervalRef = useRef<any>(null);
  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c:number) => c + 1);
    }, ms);
    dispatch(__getTimer);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return { count, start, stop };
};
