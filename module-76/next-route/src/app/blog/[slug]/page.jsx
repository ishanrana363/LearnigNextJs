import React from 'react'

const page = ({params}) => {
    console.log(params)
    return (
      <div>
        <h1>Page with ID: {params.slug}</h1>
      </div>
    )
  return (
    <div>
      
    </div>
  )
}

export default page
