import React from 'react'
import { notFound } from 'next/navigation';
function getRandomInt(){
  return Math.floor(Math.random() * 1001);
}
export default function ReviewDetail({ params }) {
  const random = getRandomInt(2);
  if(random % 2 === 1){
    throw new Error ("Error Loading Review")
  }
  return (
    <>
      {parseInt(params.reviewId) > 1000 ? (
        <div>
          <h1>Review Not Found</h1>
          <p>Please go back to the product page.</p>
        </div>
      ) : (
        <div>
          <h1>Review {params.reviewId} for Product {params.productId}</h1>
        </div>
      )}
    </>
  );
}

