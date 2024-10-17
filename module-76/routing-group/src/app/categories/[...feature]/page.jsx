import React from 'react'

const CategoryDetails = ({params}) => {
  if(params.feature.length>0){
    return( <div> { params.feature[2] }  </div>)
  }
  return (
    <div>
      <h1>category details page</h1>
    </div>
  )
}

export default CategoryDetails
