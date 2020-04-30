import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";

export default class Logout extends Component {
    constructor(){
        super();
      }

     
     logout(){
         alert(' lg alert');
       const lt = sessionStorage.getItem("access_token");
         console.log(lt);
   
         if(lt !== null){
           sessionStorage.removeItem("access_token");
           sessionStorage.clear();
         }else{
           console.log('logout');
           return <Redirect to='/Login' />
   
   
         }
       //alert();
      
   
       //return <Redirect to='/Login' />
           }
    render() {
        return (
            <div>
                <h3>Login</h3>
                <button className="btn btn-primary" onClick={this.login}>Login With Spotify</button>
                <button onClick={this.logout} className="btn btn-primary">Logout</button>

            </div>
        )
    }
}
