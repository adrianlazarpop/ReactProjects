import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log(response);
        return response.json();
      }
      )
      .then((users) => {
        console.log(users);
        // this.state.monsters = users;
        // this.setState.monsters[0] = response[0]; -- ?? why not use like this
        this.setState(() => {
          return {monster:users}
        })
        console.log('Atentie'+this.state.monsters);
      });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }

}

export default App;
