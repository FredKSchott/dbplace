import { useEffect, useLayoutEffect, useRef } from "react";

export const PIXEL_SIZE = 20;
export const GRID_WIDTH = 80;
export const GRID_HEIGHT = 40;
export const REFRESH_RATE = 1000;

/**
 * Custom hook for creating an interval that invokes a callback function at a specified delay.
 * @param {() => void} callback - The function to be invoked at each interval.
 * @param {number | null} delay - The time, in milliseconds, between each invocation of the callback. Use `null` to clear the interval.
 * @see [Documentation](https://usehooks-ts.com/react-hook/use-interval)
 * @see [MDN setInterval](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
 * @example
 * const handleInterval = () => {
 *   // Code to be executed at each interval
 * };
 * useInterval(handleInterval, 1000);
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

// r/place color palette
export const COLORS = [
  "rgba(231, 76, 60, 1)",
  "rgba(230, 126, 34, 1)",
  "rgba(241, 196, 15, 1)",
  "rgba(46, 204, 113, 1)",
  "rgba(52, 152, 219, 1)",
  "rgba(155, 89, 182, 1)",
  "white",
  "rgba(44, 62, 80, 1)",
];

