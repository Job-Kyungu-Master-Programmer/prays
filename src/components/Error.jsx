import React from 'react'

const Error = ( { errors } ) => {
  if(errors === null ) {
       return null
  }
  return (
    <div className="notification not__error">
        <span className="notification__content"> { errors } </span>
    </div>
  )
}

export default Error