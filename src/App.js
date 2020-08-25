import React from 'react';

class App extends React.Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => this.setState({
        people: data.people,
      }))
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.people.map(peopleObj => <li>{peopleObj.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App;