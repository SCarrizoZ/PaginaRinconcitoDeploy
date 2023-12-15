import {GridView} from './GridView'
import {ListView} from './ListView'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'
export const ProductList = () => {
  const {filteredProductList=[], gridView} = useContext(FiltersContext)
  // console.log(gridView)
  // console.log(filteredProductList)
  useEffect(() => {
    // console.log(filteredProductList)
  }, [filteredProductList])
  if(gridView){
    return <GridView products={filteredProductList} />
  }else{
    return <ListView products={filteredProductList} />
  }
}
