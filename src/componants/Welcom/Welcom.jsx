import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Welcom() {

  const userName =localStorage.getItem('userName')

  return (
    <>
    <div className="d-flex justify-content-center">
    <h1>Welcom {userName}</h1>

    </div>
    </>
  )
}
