import React from 'react'

import './MainHeader.css'

interface MainHeaderProps {
  children: React.ReactNode
}

const MainHeader: React.FC<MainHeaderProps> = props => {
  return (
    <header className='main-header'>
        {props.children}
    </header>
  )
}

export default MainHeader
