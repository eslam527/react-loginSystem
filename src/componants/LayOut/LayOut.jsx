import React from 'react'
import Nav from '../Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'

export default function LayOut() {
  return (
    <>
    <Nav/>
    <div className="container d-flex justify-content-center flex-column">
    <Outlet>
    </Outlet>

      </div>

    </>
  )
}
