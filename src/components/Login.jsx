import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">NAME</label>
                    <input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DOB</label>
                    <input type="date" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">BLOOD GROUP</label>
                    <select name="" id="" className="form-control">
                        <option className="O+">O+</option>
                        <option className="O-">O-</option>
                        <option className="A+">A+</option>
                        <option className="A-">A-</option>
                        <option className="B+">B+</option>
                        <option className="B-">B-</option>
                        <option className="AB+">AB+</option>
                        <option className="AB-">AB-</option>
                        
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">MOBILE NO</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">ADDRESS</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">PINCODE</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DISTRICT</label>
                    <select name="" id="" className="form-control">
                        <option className="KANNUR">KANNUR</option>
                        <option className="KASARGOD">KASARGOD</option>
                        <option className="KOZHIKODE">KOZHIKODE</option>
                        <option className="MALAPPURAM">MALAPPURAM</option>
                        <option className="PALAKKAD">PALAKKAD</option>
                        <option className="THRISSUR">THRISSUR</option>
                        <option className="ERNAKULAM">ERNAKULAM</option>
                        <option className="KOTTAYAM">KOTTAYAM</option>
                        <option className="ALAPPUZHA">ALAPPUZHA</option>
                        <option className="PATHANAMTHITTA">PATHANAMTHITTA</option>
                        <option className="IDUKKI">IDUKKI</option>
                        <option className="WAYANAD">WAYANAD</option>
                        <option className="KOLLAM">KOLLAM</option>
                        <option className="THIRUVANANTHAPURAM">THIRUVANANTHAPURAM</option>
                    </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">PLACE</label>
                        <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">EMAIL ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">USERNAME</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">PASSWORD</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                     <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-warning">SUBMIT</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <Link class = "link" to="/login">CLICK HERE TO SIGN UP</Link>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Login