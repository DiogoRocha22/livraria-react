import React from 'react'

type Props = {
  text: string,
  children: React.ReactNode
}

export default function DropDown({text, children}: Props) {
  return (
    <div className="dropdown">
      <span className='nav-link'>{text} ▼</span>
      <div className="dropdown-content">
        {children}
      </div>
    </div>
  )
}