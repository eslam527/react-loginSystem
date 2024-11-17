import { useFormik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import *as yup from 'yup'
import { UserContext } from '../context/UserContext.jsx'
export default function LogIn() {
  let {userData ,setLogInData,logInData} = useContext(UserContext)
  const navigation = useNavigate();

  useEffect(() => {

    if (localStorage.getItem('logInData') !== null)
       { setLogInData(JSON.parse(localStorage.getItem('logInData'))) }
  }, []);


  function handelLogOn(values) {
    let upDateLogInData = [...logInData, values];
    console.log(upDateLogInData);
    

    localStorage.setItem('logInData', JSON.stringify(upDateLogInData));
    setLogInData(upDateLogInData); 
    console.log(upDateLogInData);
    
  }
  function logCheck(values){
    const logChecher =userData.find(user=> user.email === values.email && user.password === values.password);
    if(logChecher){
      console.log('found');
      
      const name = localStorage.setItem('userName',logChecher.name)
      console.log({name});

      setTimeout(()=>{
        navigation('/Welcome')
      },2000)
    }else{
      console.log({massage:'user is not found'});
      setTimeout(()=>{
        navigation('/')
      },1000)

    }

  }
  useEffect(() => {
  }, [logInData]);

  let validationSchema = yup.object().shape({
    email: yup.string().email('emaile is valid').required('email is requird'),
    password: yup.string().matches(/^[A-Z]\w.{4,10}$/, 'password be like this Ahmed@123').required('pasword is requird'),
  })


  let formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, validationSchema: validationSchema
    , onSubmit: (values)=>{
      handelLogOn(values);
      logCheck(values);
    }

  })

  return (
    <>
      <div className="row logIn d-flex top-m signIn" id="signIn">
        <div className="col-md-6 bg-left p-4  bg-light">
          <form onSubmit={formik.handleSubmit} className="mt-5" id="logInForm">
            <div className="email my-3">
              <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} name='email' type="email" id="logInEmail" placeholder="Enter yout e-mail" className="form-control" />
            </div>
            {formik.errors.email && formik.touched.email &&
              <div className="wrong-email ">
                <p className="lead text-center bg-danger">
                  {formik.errors.email}

                  "Must inclid "@"and "gmail-only"
                </p>
              </div>}

            <div className="pass">
              <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} name='password' type="password" className='form-control' />
            </div>
            <div className="sende d-flex justify-content-center my-5">
              <button  type="submit" className="btn btn btn-danger logInBtn">
                log in
              </button>
            </div>
            {formik.errors.password && formik.touched.password &&
              <div className="wrong-pass ">
                <p className="lead text-center bg-danger">
                  "Must inclid cap-char at lest 6 smalle  a spicail char like '! / @ * "
                  {formik.errors.password}

                </p>
              </div>
            }

            <p className="lead py-3 alarm bg-danger text-center d-none">
              Email not found
            </p>
            <p className="lead py-3 emailalarm bg-danger text-center d-none">
              email is wrong
            </p>
            <p className="lead py-3 passalarm bg-danger text-center d-none">
              password is wrong
            </p>
          </form>
        </div>
        <div className="col-md-6 bg-redWhite d-flex justify-content-center align-items-center bg-secondary">
          <p className="lead text-center h2 fw-bold">
            dont have an account?<Link to='/'><button className="btn btn-info">sign in</button></Link>
          </p>
        </div>
      </div>

    </>
  )
}
