import { useState, useEffect, useCallback, useMemo, useRef, MouseEvent, KeyboardEvent } from "react"

interface User {
  id: number,
  username: string
}

type FibFunc = (n: number) => number

const fib: FibFunc = (n) => {
  if (n < 2) return n
  return fib(n-1) + fib(n-2)
}

const myNum: number = 37

function App() {

  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)

  /**
   * No TS necessary
   * - because its supposed to be used for side effects
   * - always returns void
   */
  useEffect( () => {
    console.log('Mounting')
    console.log(`Users: ${users}`)

    
    return () => console.log('Unmounting')
  }, [users])
  
  /**
   * useCallBack() -> memoizes a function so it doesn't have to be recreated every time
   */
  const addTwo = useCallback( (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 2), [])


  /**
   * useMemo()
   */
  const result = useMemo( () => fib(myNum), [myNum])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" name="" id="" ref={inputRef} />
    </div>
  )
}

export default App