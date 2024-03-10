import React from 'react'

function Source() {
  const arr=[{name:"reem",degree:[3,5,6],finalDegree:2},{name:"nour",degree:[9,3,6],finalDegree:6}]
  const res1=arr.map(e=>[...e.degree,e.finalDegree]);
  console.log(res1);
    return (
        <div>
          hello  
        </div>
    )
}

export default Source
