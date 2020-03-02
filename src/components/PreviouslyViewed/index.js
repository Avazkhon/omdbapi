import React from 'react';
import PropTypes from 'prop-types';
import {
  // Form,
  // FormControl,
  // Button,
  // Container,
  // Row,
  // Col,
  // Card,
} from 'react-bootstrap';

import {
  getPVToLocalStorage,
} from 'utils';

import CardList from 'components/CardList'

const defaultFilms = [
  'tt7286456',
  'tt0120737',
  'tt0499549',
  'tt0110357',
  'tt0076759',
]

class PreviouslyViewed extends React.Component {
  componentDidMount() {
    const { getPreviouslyViewed } =  this.props;
    if (typeof getPreviouslyViewed === 'function') {
      const dataFromLocalStorage = getPVToLocalStorage() || [];
      if (dataFromLocalStorage.length) {
        for (let key in dataFromLocalStorage) {
          getPreviouslyViewed(dataFromLocalStorage[key]);
        }
      } else {
        for (let key in defaultFilms) {
          getPreviouslyViewed(defaultFilms[key]);
        }
      }
    }
  }

  render() {
    const {
      previouslyViewed: {
        isFetching,
        data: Search,
        error,
      },
      isShow,
    } = this.props;

    const films = {
      isFetching,
      error,
      data: { Search }
    };

    if (!isShow) { return null };

    return (
      <CardList
        films={films}
      />
    );
  }
}

PreviouslyViewed.propTypes = {
  getPreviouslyViewed: PropTypes.func,
  previouslyViewed: PropTypes.shape({}),
  isShow: PropTypes.bool,
};

export default PreviouslyViewed
