import React from "react";

// import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";



// import { Counter } from './Components/Counter';
// import { Todos } from './Components/Todos/Todos';

// import { useTimeout } from "./Components/hooks/useTimeout";

// import axios from "axios";
// import { useFetch } from "./Components/usefetch/useFetch";
// import { useDebouncedCallback } from "@react-hookz/web";
// import { findByRole } from "@testing-library/react";


// import Fibo from "./Components/day-4usememo/Fibo";
// import Counter from "./Components/day-4usememo/Counter";
// import { Todo } from "./Components/day-4usememo/todo/Todo";

{/* sp2 day-1 */}
import { Accordian } from "./Components/sp-2/day-1/Accordian/Accordian";
import { Otpinput } from "./Components/sp-2/day-1/Otpinput";


const URL = "https://api.github.com/search/users";

type User =  {
  id: number;
  login: string;
  avatar_url : string;
}

function App() {
 {/* sp2 day-1 */}
  const handleChange = (otp: string) => {
    console.log(otp)
  }
  const data = [
    {
      desc: "a group of words containing a subject and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop",
      title: "This is header 1"
    },
    {
      desc: "a group of words containing a subject and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop",
      title: "This is header 2"
    },
    {
      desc: "a group of words containing a subject and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop",
      title: "This is header 3"
    },
    {
      desc: "a group of words containing a subject and a verb, that expresses a statement, a question, etc. When a sentence is written it begins with a big (capital) letter and ends with a full stop",
      title: "This is header 4"
    }
  ];
 
  // const [text, setText] = useState("");

  // const {loading, err, data} = useFetch<User>(URL, {
  //   per_page: 5,
  //   q: text || "Masai-codes"
  // });

  // const onChangeDebounced = useDebouncedCallback((e) => setText(e.target.value), [],1000, 0 )
  // const toShow = useTimeout(2)
  // const [toShow, setToShow] = useState(false);
  // if(!toShow) {
  //   return(
    // <h1>wait</h1>
  //)  
  // }
  return (
  // loading? (
  // <div>Loding...</div>
  //  ) : err? (
  //  <div>Error</div>
  //   )  : (
    <div className="App">
      {/* <div>Hello</div> */}

      {/* <Counter onClick={(x, y ) => {
        return ""
      }} /> */}
      {/* <Counter init={0}>
      <button>Child btn</button>
      <button>Child btn</button>
      </Counter> */}
      {/* <Counter/>
      <Counter init={20}/> */}
      {/* < */}
      {/* <Todos/> */}

      {/* <h1 style={{color: "blue"}}>Hello</h1> */}

      {/* <input
        type="text"
        // value={text}
        onChange={onChangeDebounced}
        // onChange={(e) => setText(e.target.value)}
      /> */}

      {/* {data.map((user) => (
        <div key={user.id}>
          {user.login}
          <div>
            <img style={{height: "300px" , width:"300px"}} src={user.avatar_url} alt="" />
          </div>
        </div>
      ))} */}

    {/* day-4 */}
      {/* <Fibo/> */}
      {/* <Counter/> */}
      {/* <Todo/> */}


      {/* sp2 day-1 */}
      <Otpinput totalInput={4} onChange={handleChange}/>
      <Accordian data={data}/>
    </div>
  )

}

export default App;
