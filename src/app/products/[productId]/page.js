import React from 'react'
import Products from '../page'

const ProductList = ( {params} ) => {
  return (
   <div> Details of Product {params.productId}</div>
  )
}

export default ProductList