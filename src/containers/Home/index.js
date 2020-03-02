import React from 'react';
import { connect } from 'react-redux';
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
  getFilmsInfo,
  getPreviouslyViewed
} from 'actions';

import Layout from '../Layout';


import FormSearch from 'components/FormSearch';
import CardList from 'components/CardList';
import PreviouslyViewed from 'components/PreviouslyViewed';

class Home extends React.Component {

  render() {
    const {
      getFilmsInfo,
      getPreviouslyViewed,
      previouslyViewed,
      films,
    } = this.props;
    return (
      <Layout>
        <FormSearch
          getFilmsInfo={getFilmsInfo}
        />

        <CardList
          films={films}
        />

        <PreviouslyViewed
          getPreviouslyViewed={getPreviouslyViewed}
          previouslyViewed={previouslyViewed}
        />
      </Layout>
    );
  }
}

Home.propTypes = {
  getFilmsInfo: PropTypes.func,
  films: PropTypes.shape({}),
};

function mapStateToProps(state) {
  const {
    films,
    previouslyViewed,
  } = state;
  return {
    films,
    previouslyViewed,
  };
}

export default connect(mapStateToProps, {
  getFilmsInfo,
  getPreviouslyViewed,
})(Home);
