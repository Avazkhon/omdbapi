import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  ListGroupItem,
} from 'react-bootstrap';

const Ratings = ({ ratings }) => (
  <Row className="justify-content-md-center">
    <Card.Title>Ratings</Card.Title>
    {
      ratings &&
      ratings.map((rating, i) => (
        <Col md="12" key={rating.Source} className="dark">
          <ListGroupItem>Source: {rating.Source} / Value: {rating.Value}</ListGroupItem>
        </Col>
      ))
    }
  </Row>
)

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Ratings
