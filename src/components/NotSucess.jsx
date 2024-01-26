import React from 'react'

const NotSucess = ( { success } ) => {
  if(success === null ) {
     return null
  }
  return (
    <div className="notification not__sucess">
         <span className="notification__content"> { success } </span>
    </div>
  )
}

export default NotSucess