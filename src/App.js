import React, {Component} from "react";
import {Button} from '@material-ui/core';
import MyPoster from './MyPoster';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //currentIds should be all the Ids from the database
      //We should try to display these as soon as possible! Its how we will know what poster ids we can look for in the database
      allIds: []
    }
  // Something important should probably be done here
  }

  //should look for the specific poster based off an id
  findPoster() {

  }
  // should update the poster that was found from the database
  updatePoster() {

  }
  //should save the poster into our database
  // should not save poster if poster id is already in database
  savePoster() {

  }
  //should copy original generated poster into our poster section
  copyPoster() {

  }


  render() {

    return (
      <div id="view">
      <div className="poster-stack">
    <div><img src="https://images.ctfassets.net/yr4qj72ki4ky/0UHV6corbDyqp007Vv9Zl/14c3585b46c18c3ce108298abfe152b2/hack_Reactor.jpg?q=72" /></div>
    <h2 className="poster-text">Make me change to the api text!</h2>
  </div>
        <div className="crud-buttons">
          <Button variant="contained" color="primary">generate poster</Button>
        </div>
        <MyPoster />
      </div>
    );
  }
}

export default App;