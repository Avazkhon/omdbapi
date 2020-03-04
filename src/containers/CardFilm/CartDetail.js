import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import ToFavorites  from 'widgets/ToFavorites';

import Ratings from './Ratings';
import DetailItems from './DetailItems';

const CartDetail = (
  {
    cartDetail: {
      Poster,
      Title,
      Writer,
      Plot,
      imdbID,
      Ratings: ratings,
    },
    cartDetail,
  },
) => (
  <Row className="justify-content-center">
    <Col xs="12" sm="8" md="8" lg="8" xl="8">
      <Card bg="dark" text="white">
        <Card.Body>
          <Row>
            <Col sm="7">
              <Card.Title>{Title}</Card.Title>
              <Card.Text>Writer: {Writer}</Card.Text>
              <Card.Text>Plot: {Plot}</Card.Text>
            </Col>
            <Col sm="5">
              <Card.Img variant="top" src={Poster} />
            </Col>
          </Row>

          <Ratings ratings={ratings} />

        </Card.Body>

          <DetailItems cartDetail={cartDetail} />

        <Card.Body>
          <ToFavorites
            imdbID={imdbID}
          />
        </Card.Body>
      </Card>
    </Col>
  </Row>
)

CartDetail.propTypes = {
  cartDetail: PropTypes.shape({}),
};

export default CartDetail;
