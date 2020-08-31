// create your App component here
import React from 'react'



class App extends React.Component {


    state = {
        people: []
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(people => {
            this.setState({
                people: people
            })
        })
    }

    renderPeople = (people) => {
      console.log(people)

    }

    render () {
        return (
           <h1> {this.renderPeople(this.state.people)} </h1>
        )
    }
}

export default App;
