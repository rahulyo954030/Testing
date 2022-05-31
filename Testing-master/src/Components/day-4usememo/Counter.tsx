import React from 'react';
import { useMemo, useState } from "react";



const Counter = () => {
    const [counter, setCounter] = useState(5)

    const fibo = (n:number): number => {
        return n <= 1 ? n : fibo(n-1) + fibo(n-2);
    }

    // extensive calculation
    const memoiseFibo = useMemo(() => fibo(Number(counter)), [counter])

const nthFibo = useMemo(() => fibo(counter),[counter])



  return (
    <div>
        <h1>counter: {counter}</h1>
        <button onClick={() => setCounter((prev) => prev + 1)}>Add  {counter}</button>

    </div>
  )
}

export default Counter


