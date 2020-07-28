import React from 'react';
import '../stylesheets/Pokemon.scss';

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.types);
    const PokeType = this.props.types.map((type) => {
      return <li>{type}</li>;
    });

    return (
      <div>
        <img src={this.props.url} alt="Imagen pokemon"></img>
        <h2>{this.props.name}</h2>
        <ul class="types">{PokeType}</ul>
      </div>
    );
  }
}

export default Pokemon;
