import { useEffect, useState } from "react";
import Clock from './components/Clock'

function App() {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    let array = []
    let inc = 0
    while(inc<10000){
      array.push(++inc)
    }
    const data = array.join('---')
    console.log(data)
    setValue(data)
  }, []);


  return (
    <div className="App">
      <Clock locale="bn-bd" />
    </div>
  );
}

export default App;
