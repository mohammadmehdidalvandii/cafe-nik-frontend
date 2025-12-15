import MenuHeader from '@components/templates/menu/MenuHeader/MenuHeader'
import MenuProducts from '@components/templates/menu/MenuProducts/MenuProducts'
import React from 'react'

const Menu:React.FC = ()=>{
  return (
    <>
    <MenuHeader/>
    <MenuProducts/>
    </>
  )
}

export default Menu