import React from 'react'
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.name}<strong className="brand-name"> DeveloperHouse</strong></h1>
                                    <h2>we are the team of talented Developer making websites</h2>
                                    <div className="my-3">
                                        <NavLink to={props.visit} className="btn btn-get-started">{props.btnName}</NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 orderlg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
export default Common;