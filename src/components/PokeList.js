import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    const newPokeList = this.props.list.map((element) => {
      console.log(element.name);
      return (
        <li className="card ">
          <Pokemon
            name={element.name}
            types={element.types}
            icon={element.url}
          />
        </li>
      );
    });
    console.log(newPokeList);
    return <ul className="pokeList">{newPokeList}</ul>;
  }
}

export default PokeList;
