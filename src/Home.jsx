import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import web from "../src/images/rocket.png"
import Common from './Common';


function Home() {
    return (
        <>
            <Common name="Grow your Buisness with" imgsrc={web} visit="/Service" btnName="Get Started" />

        </>
    )
}
export default Home;