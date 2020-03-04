import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';

import ToFavorites  from 'widgets/ToFavorites';


const CardItem = ({ film }) => (
  <Col xs="12" md="6" lg="4" xl="3">
    <Card.Link href={`/card/${film.imdbID}`}>
      <Card bg="dark" text="white">
        <Card.Header>{film.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Row>
              <Col md="5">
                <p>year: {film.Year}</p>
              </Col>
              <Col md="5">
                <p>type: {film.Type}</p>
              </Col>
              <Col md="2">
                <ToFavorites
                  imdbID={film.imdbID}
                />
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
