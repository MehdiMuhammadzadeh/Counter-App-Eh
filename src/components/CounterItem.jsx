import { useState } from "react";

const CounterItem = ()=>{
    const [counter, setCounter] = useState(0)

    return (
    <div className="buttons">
      <button className="btn btn-success m-1">{counter}</button>
      <button className="btn btn-info m-1" onClick={()=> setCounter(counter + 1)}>+</button>
      <button className="btn btn-warning m-1" onClick={()=> counter > 0 && setCounter(counter -1 )}>-</button>
      <button className="btn btn-dark m-1" onClick={()=>setCounter(0)}>reset</button>
      <button className="btn btn-danger m-1" >Delete</button>
  </div>
  )
}

export default CounterItem;