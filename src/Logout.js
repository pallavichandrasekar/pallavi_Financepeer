import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Logout.css'
export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div className="s">
                <h1 >You have been logged out</h1>
              <button className="t"> <Link className="u" to="/">LogIn Again</Link> </button>
            </div>
        )
    }
}