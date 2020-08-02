import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

class PokeList extends React.Component {
  render() {
    const newPokeList = this.props.list.map((element) => {
      return (
        <li className={`card card${element.id}`}>
          <Pokemon
            name={element.name}
            types={element.types}
            url={element.url}
          />
        </li>
      );
    });
    return <ul className="pokeList">{newPokeList}</ul>;
  }
}

export default PokeList;
