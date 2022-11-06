import React from 'react'
import { CounterTwoProps } from './counterTwo.types'

export const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>CounterTwo</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Inc</button>}
      {handleDecrement && <button onClick={handleDecrement}>Dec</button>}
    </div>
  )
}
