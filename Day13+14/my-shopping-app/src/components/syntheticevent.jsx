import React from 'react'

const CheckSyntheticEvent = () => {
  function handleChange(e){
    console.log(e.target.value);
  }
    return (
    <div>
        < input onChange = {handleChange} />
    </div>
)
}

export default CheckSyntheticEvent
 