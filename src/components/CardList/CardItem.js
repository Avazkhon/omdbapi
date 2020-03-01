import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';


const CardItem = ({ film }) => (
  <Col md="4">
    <Card.Link href={`/card/${film.imdbID}`}>
      <Card bg="dark" text="white">
        <Card.Header>{film.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Row>
              <Col md="6">
                <p>year: {film.Year}</p>
              </Col>
              <Col md="6">
                <p>type: {film.Type}</p>
              </Col>
            </Row>
            <Image src={film.Poster} thumbnail />
          </blockquote>
        </Card.Body>
      </Card>
    </Card.Link>
  </Col>
);

CardItem.propTypes = {
  film: PropTypes.shape({}),
};

export default CardItem;
