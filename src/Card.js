import React from 'react'

const Card = ({name,userName,eMail,phone}) => {
  return (
    <div className='Card'>
      <h2>name : {name}</h2>
      <h3>user name : {userName}</h3>
      <h3>email : {eMail}</h3>
      <h4>phone : {phone}</h4>
    </div>
  )
}

export default Card
