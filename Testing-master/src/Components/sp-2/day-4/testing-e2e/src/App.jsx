import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);

  const getData = () => {
    axios.get("http://localhost:8080/counter").then(({data}) =>{
      setCount(data.value);
    })
  };

  useEffect(() =>{
    getData();
  },[])



  return (
    <div className="App" id="main">
      <header className="App-header" >
     <h3 className='counter-value'>count is: {count}</h3>
        <p>
          <button
           className='counterBtn'
            type="button" 
            onClick={() => {
                axios.post("http://localhost:8080/counter" ,{
                  value: count + 1,
                })
                .then(() => {
                  setCount(count + 1);
                });
            }}>
            Add Count
          </button>
        </p>

      </header>
    </div>
  )
}

export default App
