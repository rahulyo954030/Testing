import { useState } from "react";

type CounterProps = {
  init?: number;
  children?: JSX.Element | JSX.Element[];
  // onClick: (x: string, y: number) => string;
};

export const Counter = (props: CounterProps) => {
  const { init=30, children } = props;  
  const [counter, setCounter] = useState(init);

  return (
    <div>
      <h3>{counter}</h3>
      {children}
      <button onClick={() => setCounter(counter + 1)}>INC</button>
      <button onClick={() => setCounter(counter - 1)}>DEC</button>
    </div>
  );
};


// integrated developement enviroment


// import { useState } from "react"

// export const Todo = () => {
//     const [text, setText] = useState("");
//     const [list, setList] = useState<TodoType[]>([]);


//     return(
//         <div>
//             <input type="text" onChange={(e) => setText(e.target.value)} />

//             <button onClick={() =>{
//                 const payload:TodoType = {
//                     id:Math.random(),
//                     title: text,
//                     status:false,

//                 }
//                 setList([...list, payload]);
//             }}>Add todo</button>
//             {list.map((todo) =>(
//                 <MemoTodoItem key={todo.id} {...todo}/>
//             ))}
//         </div>
//     )
// }