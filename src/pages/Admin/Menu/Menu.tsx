import MenuCategories from '@components/templates/admin/MenuCategories/MenuCategories'
import MenuTable from '@components/templates/admin/MenuTable/MenuTable'
import { getAllProductMenu } from '@services/menu.services'
import React from 'react'

const Menu:React.FC = ()=>{
  const {data} = getAllProductMenu();
  return (
    <>
    <MenuCategories/>
    <MenuTable products={data?.data}/>    
    </>
  )
}

export default Menu