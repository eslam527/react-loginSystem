import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import *as yup from 'yup'

export default function Register() {
  let [userDt, setUserDt] = useState([])
  useEffect(() => {
    if (localStorage.getItem('userData') != null) {
      setUserDt(JSON.parse(localStorage.getItem('userData')))
    }
  }, []);

  let validationSchema = yup.object().shape({
    name: yup.string().min(5, 'min char is 5').max(15, 'the max char is 15').required('name is requird'),
    email: yup.string().email('emaile is valid').required('email is requird'),
    password: yup.string().matches(/^[A-Z]\w.{4,10}$/, 'password be like this Ahmed@123').required('pasword is requird'),
  })
  const navigation = useNavigate();


  function handelRgster(values) {
    console.log(values);
    let upDateData = [...userDt, values]
    localStorage.setItem('userData', JSON.stringify(upDateData));
    if (formik.isValid && formik.dirty) {
      localStorage.setItem('userName', values.name)
      setTimeout(() => {
        navigation('/Welcome')

      }, 5000)
    }
  }
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    }, validationSchema: validationSchema
    , onSubmit: handelRgster

  })


  return (
    <>
      <div className="row m-3 d-flex signUp ">
        <div className="col-md-6 bg-light bg-danger d-flex justify-content-center align-items-center">
          <p className="lead text-center  h2 fw-bold">
            you have an account? <Link to='logIn'><button className="btn btn-info">sign in</button></Link>
          </p>
        </div>
        <div className="col-md-6 py-4 bg-redWhite">
          <form  onSubmit={formik.handleSubmit} className="my-3">
            <div className="name my-3">
              <input value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} name='name' type="text" placeholder="Enter your name" className="form-control" />
            </div>
            {formik.errors.name && formik.touched.name && <div className="wrong-name ">
              <p className="lead text-center bg-danger">"At lest 5 char"             {formik.errors.name}
              </p>
            </div>}

            <div className="mail my-3">
              <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name='email' placeholder="Enter your email" className="form-control email" />
            </div>
            {formik.errors.email && formik.touched.email &&
              <div className="wrong-email ">
                <p className="lead text-center bg-danger">
                  {formik.errors.email}

                  "Must inclid "@"and "gmail-only"
                </p>
              </div>}

            <div className="passwrd my-3">
              <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='password' placeholder="Enter your password" className="form-control" />
            </div>
            {formik.errors.password && formik.touched.password &&
              <div className="wrong-pass ">
                <p className="lead text-center bg-danger">
                  "Must inclid cap-char at lest 6 smalle  a spicail char like '! / @ * "
                  {formik.errors.password}

                </p>
              </div>
            }
            <div className="notes">
              <p className="text-center lead h3 d-none noteOn">succed</p>
              <p className="text-center lead h3 d-none noteOf">allredy found</p>
            </div>
            <div className="send d-flex justify-content-center my-5">
              <button type="submit" className="btn btn-danger" id="sinUp">
                sign up
              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}
