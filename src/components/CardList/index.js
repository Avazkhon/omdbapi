import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Spinner,
  Alert,
} from 'react-bootstrap';

import CardItem from './CardItem';


const CardList= ({ films }) => (
  <Container>
    {
      films.isFetching &&
      <Row className="justify-content-md-center">
        <Spinner animation="border" variant="primary" />
      </Row>
    }
    {
      films.data && films.data.Response === 'False' &&
      <Alert variant="dark">{films.data.Error}</Alert>
    }

    <Row>
      {
        films.data && films.data.Search &&
        films.data.Search.map((film) => (
          <CardItem
            key={film.imdbID}
            film={film}
          />
        ))
      }
    </Row>
  </Container>
);

CardList.propTypes = {
  films: PropTypes.shape({}),
};

export default CardList
