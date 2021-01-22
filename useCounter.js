import { useState } from "react";

export const useCounter = (inicial) => {
  const [counter, setCounter] = useState(inicial);

  const reset = () => {
    setCounter(inicial);
  };

  const incremento = () => {
    setCounter(counter + 1);
  };

  const decremento = () => {
    setCounter(counter - 1);
  };

  return {
    counter,
    incremento,
    decremento,
    reset,
  };
};
