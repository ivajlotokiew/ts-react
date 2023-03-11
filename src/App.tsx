import { useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

function Heading({title}: {title: string}) {
  return <h1>{title}</h1>
}

function App() {
  const [url, setUrl] = useState('');
  const { data } = useFetch({
    url,
  });
  
  console.log("App rendering");
  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
      <button onClick={() => setUrl("/jack.json")}>Jack </button>
      <button onClick={() => setUrl("/sally.json")}>Sally </button>
      <button onClick={() => setUrl("/sally1.json")}>Sally1 </button>
      <button onClick={() => setUrl("/sally2.json")}>Sally2 </button>
      <Heading title="Hello there"></Heading>
    </div>
  );
}

export default App;
