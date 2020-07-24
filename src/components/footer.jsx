import React from 'react'
import { useState } from 'react'

const Test = ({render}) => {
  const [cnt,setCnt] = useState(1);
  return(
    <div>
      {render(cnt)}
    </div>
  )
}

 const Ha = () => {
  return (
    <Test
      render={(cnt) => {
        return(
          <div>{cnt*10}</div>
        )
      }}
    />
  )
}
export default Ha;