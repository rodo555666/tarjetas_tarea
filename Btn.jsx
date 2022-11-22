import React from 'react'

const Btn = ({oncl,styleback}) => {
  return (
    <div>
       <button onClick={oncl} style={styleback}><div>&gt;</div></button>
    </div>
  )
}

export default Btn
