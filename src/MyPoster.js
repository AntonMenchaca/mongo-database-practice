import React from 'react';
import {Button, Input} from '@material-ui/core';

let MyPoster = () => (
<div>
  <div className="poster-stack">
    <div><img src="https://images.ctfassets.net/yr4qj72ki4ky/0UHV6corbDyqp007Vv9Zl/14c3585b46c18c3ce108298abfe152b2/hack_Reactor.jpg?q=72" /></div>
    <h2 className="poster-text">Make me change when the input field changes!</h2>
  </div>
  <div className="form-poster">
    <form >
      <Input placeholder="#id"></Input>
      <Button variant="contained" color="primary">find poster</Button>
    </form>

    <form>
      <Input placeholder="Hang in there"></Input>
      <Button variant="contained" color="primary">update poster</Button>
    </form>


      <Button variant="contained" color="primary">save poster</Button>

      <Button variant="contained" color="primary">copy generated poster</Button>


  </div>
</div>
)

export default MyPoster;