import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getFaVorites,
  updateFavorites,
} from 'actions';

import Layout from '../Layout';

import CardList from 'components/CardList';

class Favorites extends React.Component {
  componentDidMount () {
    this.getInit();
  }
  getInit = async () => {
    const { updateFavorites} = this.props;
    await updateFavorites();
    await this.getAllFaVorites();
  }

  getAllFaVorites = () => {
    const { getFaVorites, favorites} = this.props;
    if (favorites.data) {
      for (let key in favorites.data) {
        getFaVorites(favorites.data[key]);
      }
    }
  }

  render() {
    const { favorites: { filmsData, isFetching, error } } = this.props;
    const films = { data: filmsData, isFetching, error };
    return (
      <Layout>
        <CardList
          films={films}
        />
      </Layout>
    );
  }
}

Favorites.propTypes = {
  getFaVorites: PropTypes.func,
  updateFavorites: PropTypes.func,
  favorites: PropTypes.shape({}),
};

function mapStateToProps(state) {
  const {
    favorites,
  } = state;
  return {
    favorites,
  };
}

export default connect(mapStateToProps, {
  getFaVorites,
  updateFavorites,
})(Favorites);
