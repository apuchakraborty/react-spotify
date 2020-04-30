import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Logout from '../Login/Logout'


export default class Home extends Component {
    constructor(){
        super();
      }

      
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="/Logout" className="btn btn-primary">Logout</Link>

            </div>
        )
    }
}
