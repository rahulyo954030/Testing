import React from 'react';
import { useMemo, useState } from "react";



// to store in cache
// const cache = {
// }

const Fibo = () => {
    const [text, setText] = useState("");
    // const [num, setNumber] = useState(10)

    const fibo = (n:number): number => {
        return n <= 1 ? n : fibo(n-1) + fibo(n-2);
    }

    // extensive calculation
    const memoiseFibo = useMemo(() => fibo(Number(text)), [text])

    // to store in cache
    // const memoiseFibo = useMemo(() =>{
    //     if(text in cache){
    //         return cache[text]
    //     }
    //     let ret = fibo(Number(text));
    //     cache[text] = ret
    //     return ret
    
    // }, [text]
    
    // 1st way
    const calFibo = () => {
        // console.time("t1")
        // const ret = fibo(Number(text))
        // console.timeEnd("t1")
        console.log("nth Fibo", memoiseFibo)
    }
     {/* 2nd way */}
    // console.time("t1")
    // const nthFibo = fibo(num)
    // console.timeEnd("t1")

  return (
    <div>
       <input type="text" onChange= {(e) => setText(e.target.value)}/>
       <button onClick={calFibo}>calFibo</button>

        {/* 2nd way */}
        {/* <h1>Fibo of {num} is {nthFibo}</h1>
       <button onClick={() => setNumber(num + 1)}>Add 1 {num}</button> */}

    </div>
  )
}

export default Fibo


