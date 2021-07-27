import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/4.jpg"
import Common from './Common';


function About() {
    return (
        <>
        <Common name="Welcome to About Page" imgsrc={web} visit="/Contact" btnName="Contact Now" />
        </>
    )
}
export default About;