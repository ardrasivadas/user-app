import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewuser = () => {

    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.get("").then(
            (Response) => {
                changeData(Response.data)
            }
        ).catch()
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table" border={2}>
                            <thead>
                                <tr>
                                    <th scope="col">NAME</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">BLOOD GROUP</th>
                                    <th scope="col">MOBILE NO</th>
                                    <th scope="col">ADDRESS</th>
                                    <th scope="col">PINCODE</th>
                                    <th scope="col">DISTRICT</th>
                                    <th scope="col">PLACE</th>
                                    <th scope="col">EMAIL ID</th>
                                    <th scope="col">USERNAME</th>
                                    <th scope="col">PASSWORD</th>
                                    <th scope="col">CONFIRM PASSWORD</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value, index) => {

                                        return <tr>
                                            <td>{value.name}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.bloodgroup}</td>
                                            <td>{value.mobileno}</td>
                                            <td>{value.address}</td>
                                            <td>{value.pincode}</td>
                                            <td>{value.district}</td>
                                            <td>{value.place}</td>
                                            <td>{value.emailid}</td>
                                            <td>{value.username}</td>
                                            <td>{value.password}</td>
                                            <td>{value.cpassword}</td>
                                        </tr>

                                    }
                                )}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Viewuser