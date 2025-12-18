import MenuCategories from '@components/templates/admin/MenuCategories/MenuCategories'
import MenuTable from '@components/templates/admin/MenuTable/MenuTable'
import React from 'react'

const Menu:React.FC = ()=>{
  return (
    <>
    <MenuCategories/>
    <MenuTable/>    
    </>
  )
}

export default Menu