import  { useState, useCallback } from 'react'
import { Todoitem,TodoiteMmemo } from './Todoitem';

export type TodoType = {
  id: number;
  title: string;
  status: boolean;
}

export const Todo = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState<TodoType[]>([]);

  const handleToggle = (id: number) =>{
      setList(list.map((l) => (l.id === id ? {...l, status: !l.status} : l )))
  }

  const callback = useCallback(handleToggle, [list]);


  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
       onClick={() => {
        const payload = {
            id: Math.random(),
            title: text,
            status: false,
        }
        setList([...list, payload])
      }}>
        Add Todo
        </button>

      {list.map(todo => <TodoiteMmemo key={todo.id} {...todo} handleToggle={callback}/>)}
    </div>
  )
}
