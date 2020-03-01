import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

import Ratings from './Ratings';
import DetailItems from './DetailItems';

const CartDetail = (
  {
    cartDetail: {
      Poster,
      Title,
      Writer,
      Plot,
      Ratings: ratings,
    },
    cartDetail,
  },
) => (
  <Row className="justify-content-md-center">
    <Col sm="8">
      <Card bg="dark" text="white" style={{ width: '48rem' }}>
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

          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>

        </Card.Body>
      </Card>
    </Col>
  </Row>
)

CartDetail.propTypes = {
  cartDetail: PropTypes.shape({}),
};

export default CartDetail;
