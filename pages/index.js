import { useState } from 'react'
import styles from './styles/index.module.css'

function Contador() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <div className={styles.counterDiv }>
      <h1>{counter}</h1>
      <button onClick={addCounter}>Clique aqui</button>
    </div>
  )
}


export default function Home() {


  return (
    <div>
      <Contador />
    </div>
  )
}