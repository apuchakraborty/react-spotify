import React, { Component } from 'react';
import axios from 'axios'
import Header from '../parts/Header';

import { Link } from 'react-router-dom';

export default class PlaylistTrack extends Component {
    constructor(props){
        super(props);
        this.state = {
            playlisttrack: [],
        }

    }

    componentDidMount(){
        // console.log(123);
        this.getPostsById();
     }

    
     

    getPostsById(){
        let productId = this.props.match.params.id;
        console.log(productId);
        const t = sessionStorage.getItem('access_token');
        console.log(t);

        var config = {
            headers: {
                'Accept': 'application/json',
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${t}`
                }
          };

          

        axios.get(`https://api.spotify.com/v1/playlists/${productId}/tracks`, config)
        .then(res => this.setState({
            playlisttrack: res.data.items
        }))
           .catch(err => console.log(err));
    }

    

   


    render() {
        const {playlisttrack} = this.state;
       console.log(playlisttrack);
       // console.log(this.props);

   //const newlist = playlisttrack.items.map(nm => {
      // console.log(nm)
   //})
        return (
          <div>
          <Header />
          <br />
            <div className="container">

                <Link to='/' class='btn btn-secondary'>Back</Link>



                <div class="row">
                <br />
                   {playlisttrack.map((pl, index) => (



            <div className="col-sm-3" key={index}>

                <div className="card mb-1">

                            <img src={pl.track.album.images[0].url} alt="" className="img-fluid" />
                                

                           <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
          <h4 class="card-title"> 
                    {pl.track.album.name}

          </h4>
         
        </div>



                        
                             
                            
                        
                    </div>
                </div>







                   ))} 
            </div>
            </div>
            </div>
        )
    }
}
