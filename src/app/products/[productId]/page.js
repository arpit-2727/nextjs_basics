import React from 'react'
import Products from '../page'
import {metadata} from "next"

export const generateMetadata =({params}) => {
  
  return  {
    title : `Product ${params.productId}`,
  };
}
const ProductList = ( {params} ) => {
  return (
   <div> Details of Product {params.productId}</div>
  )
}

export default ProductList