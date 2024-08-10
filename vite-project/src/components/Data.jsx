import React from 'react'

function Data({newObj}) {
   

  return (
    <>
  {newObj.map((element,index)=>(
    <div key = {index}>
        <h1>Name: {element.name}</h1>
        <h1>Location :{element.location}</h1>
    </div>
    ))}
    
    </>
  )
}

export default Data