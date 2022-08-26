import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e12341e'
        },
        {
          name: 'Frank',
          id: '12e123cas'
        },
        {
          name: 'Jacky',
          id: '1243e1r2'
        },
        {
          name: 'Adrian',
          id: '221e133q1'
        }
      ]
    };
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
