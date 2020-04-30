import React, { Component } from 'react'
//import authenticate from './Authenticate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import Home from './parts/Home';
import Playlist from './playlist/Playlist';
import PlaylistTrack from './playlist/PlaylistTrack';
import Login from './login/Login'; 








export default class App extends Component {
   
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Playlist" component={Playlist} />
        <Route exact path="/playlisttrack/:id" component={PlaylistTrack} />

      </Switch>
        
        {/* <button onClick={this.logout} > Logout </button> */}
      </div>
      </Router>
    );
  }
}