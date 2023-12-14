import {GridView} from './GridView'
import {ListView} from './ListView'
import React from 'react'
import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'
export const ProductList = () => {
  const {filteredProductList, gridView} = useContext(FiltersContext)
  console.log(gridView)
  if(gridView){
    return <GridView products={filteredProductList} />
  }else{
    return <ListView products={filteredProductList} />
  }
}
