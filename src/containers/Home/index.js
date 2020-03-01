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
  getFilmsInfo
} from 'actions';

import Layout from '../Layout';


import FormSearch from 'components/FormSearch';
import CardList from 'components/CardList';

class Home extends React.Component {

  render() {
    const {
      getFilmsInfo,
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
      </Layout>
    );
  }
}

Home.propTypes = {
  getFilmsInfo: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    films,
  } = state;
  return {
    films,
  };
}

export default connect(mapStateToProps, {
  getFilmsInfo
})(Home);
