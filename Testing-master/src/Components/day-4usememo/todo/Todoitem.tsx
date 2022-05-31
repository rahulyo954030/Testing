import React, { memo, useState } from 'react'
import {TodoType} from "./Todo"

type TodoItemProps = {
    handleToggle: (s: number) => void;
}

export const Todoitem = (props: TodoType & TodoItemProps) => {

    console.log("Todoitem :", props.title)
  return (
    <div>
        {props.title} - {props.status ? "Done" : "Not Done"};
        <button onClick={()=> props.handleToggle(props.id)} >Toggle</button>
    </div>
  )
}

// export const TodoiteMmemo = memo(Todoitem);

export const TodoiteMmemo = memo(Todoitem, function eq(pre, curr){
    if(pre.id === curr.id){
        return true;
    }
    return false
});
// true means no need to re-render




// useState
// const Counter = useSelector(s => s.todo, function equal(pre, curr){
// if(pre.id === cursorTo.id){
//     return true;
// }
// return false
// })