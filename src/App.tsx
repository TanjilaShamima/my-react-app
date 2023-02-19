import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    let array = []
    let inc = 0
    while(inc<10){
      array.push(++inc)
    }
    const data = array.join('-')
    console.log(data)
    setValue(data)
  }, []);


  return (
    <div className="App">
      {/* {value.map((num, index) => (
        <li key={index}>{num}</li>
      ))} */}
      {value}
    </div>
  );
}

export default App;
