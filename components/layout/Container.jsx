import React from 'react'

function Container({children}) {
  return (
      <div className=' container mx-auto px-2 md:px-4 py-4'>{children}</div>
  )
}

export default Container