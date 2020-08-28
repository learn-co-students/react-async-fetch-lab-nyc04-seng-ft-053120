import React from 'react';

export default class App extends React.Component {

  // Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json, a free API that returns a list of people currently in space.

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(result => {
        console.log(result)
      });
  }

  render() {
    return (
      <h1>Here I am</h1>
    )
  }
}