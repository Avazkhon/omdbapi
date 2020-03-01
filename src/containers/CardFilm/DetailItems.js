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
  <ListGroup className="list-group-flush dark">
    <ListGroupItem>Year: {Year}</ListGroupItem>
    <ListGroupItem>Run time: {Runtime}</ListGroupItem>
    <ListGroupItem>Genre: {Genre}</ListGroupItem>
    <ListGroupItem>Director: {Director}</ListGroupItem>
    <ListGroupItem>Actors: {Actors}</ListGroupItem>
    <ListGroupItem>Language: {Language}</ListGroupItem>
    <ListGroupItem>Country: {Country}</ListGroupItem>
    <ListGroupItem>Awards: {Awards}</ListGroupItem>
    <ListGroupItem>imdb ID: {imdbID}</ListGroupItem>
    <ListGroupItem>Type: {Type}</ListGroupItem>
    <ListGroupItem>DVD: {DVD}</ListGroupItem>
    <ListGroupItem>Production: {Production}</ListGroupItem>
  </ListGroup>
)

DetailItems.propTypes = {
  cartDetail: PropTypes.shape({}),
};

export default DetailItems;
