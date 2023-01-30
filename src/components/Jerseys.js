import React from 'react'

const Jerseys = ({name, JerseyNum}) => {
  
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h1>{JerseyNum}</h1>
    </div>
  )
}

export default Jerseys