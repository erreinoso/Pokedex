import React from 'react';
import '../stylesheets/Pokemon.scss';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const PokeType = this.props.types.map((type) => {
      return <li>{type}</li>;
    });

    return (
      <>
        <img src={this.props.url} alt="Imagen pokemon"></img>
        <h2>{this.props.name}</h2>
        <ul class="types">{PokeType}</ul>
      </>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;
