import React from 'react';
import '../stylesheets/App.scss';
import PokeList from './PokeList';
import listFromApi from '../data/list.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: listFromApi };
  }
  render() {
    console.log(this.state.list);
    return (
      <div>
        <h1>Mi lista de pokemon</h1>
        <PokeList list={this.state.list} />
      </div>
    );
  }
}

export default App;
