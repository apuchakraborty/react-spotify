import React, { Component } from 'react'
import authenticate from '../Authenticate';
import { Redirect } from "react-router-dom";
import Header from '../parts/Header';
import Swal from 'sweetalert2'


export default class Login extends Component {
    constructor(){
        super();
        this.login();
      }

      login(){
        const lt = sessionStorage.getItem("access_token");

        if(lt == null){
            authenticate();
            var token = new URL(window.location.href).hash.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
            sessionStorage.setItem("access_token", token); 
            //this.props.history.push("/Login")
          }
      }
   
     logout(){
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Logou Successfully'
      })
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
            <Header />
            <div className="container-fluid">
                <h3>Login</h3>
                <button className="btn btn-primary" onClick={this.login}>Login With Spotify</button>
                <button onClick={this.logout} className="btn btn-primary">Logout</button>

            </div></div>
        )
    }
}
