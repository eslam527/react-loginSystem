import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogIn from '../LogIn/LogIn'
import { UserContext } from '../context/UserContext'

export default function Nav() {
   const {logInData,userData} = useContext(UserContext)
  const navegate = useNavigate()
function logOut(){
  localStorage.removeItem('logInData')
  localStorage.removeItem('userName')

  navegate('/logIn')
}
let name =  localStorage.getItem('userName')

  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between w-25 m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='' className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to='logIn' className="nav-link">logIn</Link>
              </li>

                 {name && <li className="nav-item">
                <Link to='Welcome' className="nav-link " >Welcome</Link>
              </li>}
            </ul>
            {name?            <div onClick={()=>logOut()} className="btn btn-success">logOut</div>
:''}
          </div>
        </div>
      </nav>
    </>
  )
}
