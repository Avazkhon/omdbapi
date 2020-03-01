import React from 'react';
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

const CartDetail = (
  {
    cartDetail: {
      Poster,
      Title,
      Writer,
      Plot,
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
  <Row className="justify-content-md-center">
    <Col sm="8">
      <Card style={{ width: '48rem' }}>
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
          </Card.Body>
            <ListGroup className="list-group-flush">
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

function mapStateToProps(state) {
  const {
    cartDetail,
  } = state;
  return {
    cartDetail,
  };
}

export default CartDetail;
