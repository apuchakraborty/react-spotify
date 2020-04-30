import React, { Component } from 'react';
import PlaylistItem from './PlaylistItem'
import Header from '../parts/Header';

import axios from 'axios';


export default class Playlist extends Component {
    state = {
        playlist:[], 
        isLoaded: false,
        isLoggedin: sessionStorage.getItem("access_token") 
    };

    // componentDidMount() {
    //     const url = `${API_URL}/users/`;
    //     axios.get(url).then(response => response.data)
    //     .then((data) => {
    //       this.setState({ users: data })
    //       console.log(this.state.users)
    //      })
    //   }

    componentDidMount(){
       // var token = new URL(window.location.href).hash.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
        const t = sessionStorage.getItem('access_token');
        //console.log(t);

        var config = {
            headers: {
                'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${t}`
                }
          };
        axios.get(`https://api.spotify.com/v1/me/playlists`, config)
         .then(response => response.data)
         .then((data) => {
            this.setState({
                playlist: data,
                isLoaded: true
            })
         }
        )
        .catch(err => console.log(err));
    }

    render(){
       const {playlist, isLoaded} = this.state;
       console.log(playlist);
       //console.log(this.state.isLoggedin);

        
       if(isLoaded){
        return (   
            <div className="main">
                <Header />
                <br />
                <div class="container">
            <div className="row">

                {playlist.items.map((playlist, key) => (
            <PlaylistItem key={key} item={playlist}/>
                           
                ))} 

                    {/* {playlist.items.map((playlist) => (
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{playlist.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        {playlist.name}             
                        </h6>
                        </div>
                    </div>
                    ))} */}
</div>
</div></div>
                            
            
        );
   }   
       return <h3>loading ...</h3>

        }
        

    
}
