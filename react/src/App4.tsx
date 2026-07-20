import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
