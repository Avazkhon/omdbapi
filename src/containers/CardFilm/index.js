import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  // Form,
  // FormControl,
  // Button,
  // Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import {
  getFilmInfo
} from 'actions';

import CartDetail from './CartDetail';
import Layout from '../Layout';

class CardFilm extends React.Component {

  componentDidMount() {
    const { getFilmInfo } = this.props;
    const { imdbID } = this.props.match.params;
    if (typeof getFilmInfo === 'function') {
      getFilmInfo(imdbID);
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
  getFilmInfo
})(CardFilm);
