import React from "react";
import myvid from '../assets/introvid.mp4';

const Main = () => {
return (
    <div className="main">
        <video src={myvid} autoPlay loop muted/>
    </div>
)
}

export default Main