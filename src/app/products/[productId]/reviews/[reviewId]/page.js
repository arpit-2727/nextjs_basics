import React from 'react'

const ReviewDetail = ({params}) => {
  return (
    <>
         <h1>
          
          Review {params.reviewId} for Product {params.productId}
           
         </h1>


    </>
  )
}

export default ReviewDetail