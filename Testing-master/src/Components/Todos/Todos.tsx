import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios, { AxiosResponse } from "axios"

type TodoType = {
    id: string;
    title: string;
    status: boolean;
};


export const Todos = () =>{
    const [text,setText] = useState("")
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect (() => {
        getData()
    }, []);
    
    const getData = () => {
        axios.get("http://localhost:8080/todos").then(( response: AxiosResponse <TodoType[]> ) => {
            const {data} = response;
            console.log(data.map(e => e.title));
            setTodos(data)
        });
    };

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button 
            onClick={() => {
                const payload =
                 { title: text, status: false };
                axios.post("http://localhost:8080/todos", payload).then(getData)
                //  setTodos([...todos, payload] )
                }}
                >
                    ADD TODO</button>
            {todos.map((t) => (
                <div key={t.id}> {t.title} - {t.status ? "Done" : "Not Don"} </div>
            ))}
        </div>
    )
}