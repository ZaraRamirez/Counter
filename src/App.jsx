import { useState, useMemo } from "react"
import Display from "./components/Display"
import { BsArrowUpCircle, BsArrowRepeat, BsArrowDownCircle } from 'react-icons/bs'

const heavyTask = (iterations = 200) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Contando");
  }
  return `${iterations} cuentas realizadas`;
}

const App = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  // Usar useMemo para memorizar el resultado de heavyTask
  const memorizedValue = useMemo(() => {
    console.log("Render de momorizedValue");
    return heavyTask(count);
  }, [count]);

  console.log("Render de App");

  return (
    <>
      <h1 className="text-center font-bold">Counter</h1>
      <div className="flex justify-center">
        <Display value={count} />
      </div>
      <p className="text-center text-m">{memorizedValue}</p>
      <br />
      {show && (
        <div className="flex justify-center">
          <button
            className="flex px-3 py-1 rounded-lg mx-2"
            onClick={() => handleIncrease()}
          >
            Increase <BsArrowUpCircle className="ml-1" />
          </button>
          <button
            className="flex px-3 py-1 rounded-lg mx-2"
            onClick={() => handleReset()}
          >
            Reset <BsArrowRepeat className="ml-1" />
          </button>
          <button
            className="flex px-3 py-1 rounded-lg mx-2"
            onClick={() => handleDecrement()}
          >
            Decrease <BsArrowDownCircle className="ml-1" />
          </button>
        </div>
      )}
      <div className="flex justify-center">
        <button
          className="px-3 py-1 rounded-lg my-3"
          onClick={() => setShow(!show)}
        >
          {show
            ? 'Hide buttons'
            : 'Show buttons'
          }
        </button>
      </div>
    </>
  )
}

export default App