import React from 'react'

const User = ({render}) => {
  return (
    <div>
      <h1>Wellcome ,{render(true)}</h1>
    </div>
  )
}

export default User;