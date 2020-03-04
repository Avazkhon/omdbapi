import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getFilmInfo,
  updateFavorites,
} from 'actions';

import {
  inBrowser,
  setPVToLocalStorage,
} from 'utils';

import CartDetail from './CartDetail';
import Layout from '../Layout';

class CardFilm extends React.Component {

  componentDidMount() {
    const { getFilmInfo, updateFavorites } = this.props;
    const { imdbID } = this.props.match.params;
    if (typeof getFilmInfo === 'function') {
      getFilmInfo(imdbID);
      setPVToLocalStorage(imdbID);
      updateFavorites();
    }
  }

  render() {
    const {
      film,
    } = this.props;

    return (
      <Layout>
        { film.data &&
          <CartDetail
            cartDetail={film.data}
          />
        }
      </Layout>
    );
  }
}

CardFilm.propTypes = {
  film: PropTypes.shape({}),
  getFilmInfo: PropTypes.func,
  updateFavorites: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    film,
  } = state;
  return {
    film,
  };
}

export default connect(mapStateToProps, {
  getFilmInfo,
  updateFavorites,
})(CardFilm);
