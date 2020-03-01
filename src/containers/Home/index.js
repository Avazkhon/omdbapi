import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import {
  getFilmsInfo
} from 'actions';

import Layout from '../Layout';


import FormSearch from 'components/FormSearch';

class Home extends React.Component {

  render() {
    const {
      getFilmsInfo,
    } = this.props;
    return (
      <Layout>
        <FormSearch
          getFilmsInfo={getFilmsInfo}
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
