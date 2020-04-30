import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././App.css'


export default class PlaylistItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }
    render() {
        // const prostyle = {
        //     height:"520px",
        //     overflow:"hidden",
        //   };

        //   const mystyle = {
        //   };

        return (
            <div className="col-sm-4">

                <div className="card mb-4">

                                <img src={this.state.item.images[0].url} alt="" className="rounded img-fluid" />

                           <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
          <h4 class="card-title">{ this.state.item.name }</h4>
          <h6 class="card-subtitle mb-2">Creator : { this.state.item.owner.display_name }</h6>
          <p class="card-text">Folder Type :  { this.state.item.type } </p>
          <div class="link d-flex">
            <Link to={`/PlaylistTrack/${this.state.item.id}`} class="btn btn-danger btn-rounded rnd"><i className="fa fa-chevron-right"></i></Link>
          </div>
        </div>



                        
                            {/* <a href={this.state.item.id} className="btn btn-primary">View All Track</a> */}
                            {/* <Link to={`/PlaylistTrack/${this.state.item.id}`} className='btn btn-indigo btn-block'>View All Tracks</Link> */}
                                
                            
                        
                    </div>
                </div>


        )
    }
}
