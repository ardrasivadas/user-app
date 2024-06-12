import React, { useState } from 'react'
import Navbar from './Navbar'

const Adduser = () => {
    const [data, setData] = useState(

        {
            "name":"",
            "dob":"",
            "bloodgroup":"",
            "mobno":"",
            "address":"",
            "pincode":"",
            "district":"",
            "place":"",
            "emailid":"",
            "username":"",
            "password":"",
            "cpassword":""
            
        }
    )

const inputHandler = (event) => {
    setData({...data, [event.target.name]: event.target.value})
}

const readValue = () => {
    
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">USERNAME</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">PASSWORD</label>
                        <input type="text" className="form-control" />
                    </div>
                   
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success">LOGIN</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Adduser