import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import List from "./components/List"

import { useState } from "react"

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <Heading title={'Hello World!'}/>
    <Section title={'Explicit Title'}>This is my Section.</Section>
    <Counter setCount={setCount}>Count is {count} </Counter>
    <List items={['A', 'B', 'C', 'D']} render={(item: string) => <span className="gold bold">{item}</span>} />
    </>
  )
}

export default App
