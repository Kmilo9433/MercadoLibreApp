import React, {useEffect,useState} from 'react'
import ListProducts from "../../shared/listProducts"
import {useLocation} from "react-router-dom"
import {get} from "../../../services"

const ProductsResults = () => {
  const {pathname, search} = useLocation();
  const [products, setProducts] = useState([])

  useEffect(() => {
    getItems() 
  }, [search])

  const getItems = async() => {
    try{
      const result = await get(`${pathname}${search}`);
      setProducts(result?.items || [])
    }catch(error){
      console.error(error);
    }
  }
  
  return (
    <ListProducts products={products}/>
  )
}

export default ProductsResults

