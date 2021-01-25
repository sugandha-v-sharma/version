import React, {useState} from "react";

const IncreaseCount = () => {
  const [count, setCount] = useState(0);

  const Incum = () => {
    setCount (count + 1);
  };
  
  return(
    <>
      <h1>{count}</h1>
      <button onClick = {Incum}>Click Me</button>
    </>
  )
}

export default IncreaseCount;