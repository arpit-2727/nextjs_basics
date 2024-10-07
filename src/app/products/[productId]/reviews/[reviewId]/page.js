import React from 'react'
import { notFound } from 'next/navigation';

export default function ReviewDetail({ params }) {
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

