import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  Image,
} from 'react-bootstrap';


const CardList= ({ films }) => (
  <Container>
    <Row>
        {
          films.data && films.data.Search &&
          films.data.Search.map((film) => (
            <Col md={{ span: 4 }}>
              <Card key={film.imdbID}>
                <Card.Header>{film.Title}</Card.Header>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <Row>
                      <Col md={{ span: 6 }}>
                        <p>year: {film.Year}</p>
                      </Col>
                      <Col md={{ span: 6 }}>
                        <p>type: {film.Type}</p>
                      </Col>
                    </Row>
                    <Image src={film.Poster} thumbnail />
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
    </Row>
  </Container>
);

CardList.propTypes = {
  films: PropTypes.shape({}),
};

export default CardList
