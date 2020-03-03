import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';

const DetailItems = (
  {
    cartDetail: {
      Year,
      Runtime,
      Genre,
      Director,
      Actors,
      Language,
      Country,
      Awards,
      imdbID,
      Type,
      DVD,
      Production,
    }
  },
) => (
  <ListGroup className="list-group-flush">
    <ListGroupItem variant="dark">Year: {Year}</ListGroupItem>
    <ListGroupItem variant="dark">Run time: {Runtime}</ListGroupItem>
    <ListGroupItem variant="dark">Genre: {Genre}</ListGroupItem>
    <ListGroupItem variant="dark">Director: {Director}</ListGroupItem>
    <ListGroupItem variant="dark">Actors: {Actors}</ListGroupItem>
    <ListGroupItem variant="dark">Language: {Language}</ListGroupItem>
    <ListGroupItem variant="dark">Country: {Country}</ListGroupItem>
    <ListGroupItem variant="dark">Awards: {Awards}</ListGroupItem>
    <ListGroupItem variant="dark">imdb ID: {imdbID}</ListGroupItem>
    <ListGroupItem variant="dark">Type: {Type}</ListGroupItem>
    <ListGroupItem variant="dark">DVD: {DVD}</ListGroupItem>
    <ListGroupItem variant="dark">Production: {Production}</ListGroupItem>
  </ListGroup>
)

DetailItems.propTypes = {
  cartDetail: PropTypes.shape({}),
};

export default DetailItems;
