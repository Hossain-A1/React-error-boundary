import React from 'react'
import { UserConsumer } from '../Context/userContext';

const Comp4 = () => {
  return (
    <div>
<UserConsumer>
  {
    (userName)=>{
      return <h1>Hello,{userName.name} Age, {userName.age}</h1>
    }
  }
</UserConsumer>
    </div>
  )
}

export default Comp4