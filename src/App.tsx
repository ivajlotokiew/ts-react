import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  console.log("App rendering");
  const { data } = useFetch({
    url: "/jack.json",
  });
  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
