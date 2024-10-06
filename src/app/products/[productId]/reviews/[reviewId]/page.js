import React from 'react'
import NotFound from '@/app/not-found'
import { notFound } from 'next/navigation'



export default function ReviewDetail({ params }) {
  return (
    <>
      {parseInt(params.reviewId) > 1000 ? notFound() : (
        <h1>
          Review {params.reviewId} for Product {params.productId}

         </h1>


        
      )}
    </>
  );
  
}


