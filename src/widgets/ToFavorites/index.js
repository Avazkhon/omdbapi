import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IoIosHeart } from "react-icons/io";

import {
  updateFavorites
} from 'actions';


import {
  setFavoritesToLocalStorage,
  removeFavoritesToLocalStorage,
} from 'utils';

class ToFavorites extends Component {

  handleAdd = () => {
    const { imdbID, updateFavorites } = this.props;
    setFavoritesToLocalStorage(imdbID);
    updateFavorites();
  }

  handleRemove = () => {
    const { imdbID, updateFavorites } = this.props;
    removeFavoritesToLocalStorage(imdbID)
    updateFavorites();
  }

  render() {
    const {
      imdbID,
      favorites,
    } = this.props;

    const isFavorites = favorites && favorites.data && favorites.data.some(fofarit => fofarit === imdbID);

    return (
      <IoIosHeart
        style={{ color: (isFavorites ? 'red' : ''), 'fontSize': '30px'}}
        onClick={isFavorites ? this.handleRemove : this.handleAdd}
      />
    )
  }
}

ToFavorites.propTypes = {
  imdbID: PropTypes.string,
  favorites: PropTypes.shape({}),
  updateFavorites: PropTypes.func,
}


function mapStateToProps(state) {
  const {
    favorites
  } = state;
  return {
    favorites
  };
}

export default connect(mapStateToProps, {
  updateFavorites
})(ToFavorites);
