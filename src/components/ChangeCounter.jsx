import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext);
    
  return (
    <div>
        <button onClick={()=> setCounter(counter + 1)}>
            Add value to counter
        </button>
        <button onClick={()=> setCounter(0)}>
            reset counter
        </button>
        <button onClick={()=> setCounter(counter +5)}>
            Add value to counter +5
        </button>
    </div>
  )
}

export default ChangeCounter