import React, { useState } from 'react';
import "./Home.css";
import {Link, Redirect} from 'react-router-dom'

function Home() {
    const [files, setFiles] = useState([])
    
    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          console.log("e.target.result", e.target.result);
          setFiles(e.target.result);
        };
      };

    return (
        <div>
            <div className="mains">
                <div className="fle">
                 <div>
                <button className="btn"><Link className="j" to="/Logout" >Logout </Link></button>
                </div>
                </div>
                <div className="upload">
                    <h1 >Upload Json file</h1>

                    <input type="file" onChange={handleChange} />
                    <br />
                </div>
                <div className="display">
                    <button className="btn"><Link className="j" to="/Data" >Display Data </Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home