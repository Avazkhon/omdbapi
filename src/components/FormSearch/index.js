import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import './index.css';

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        search: '',
        typeVideo: '',
        year: '',
      },
    }
  }
  componentDidMount() {
    const { getFilmsInfo } = this.props;
    if (typeof getFilmsInfo === 'function') {
      getFilmsInfo();
    }
  }

  render() {
    return (
      <Container className="dark form-search">
        <Row className="justify-content-md-center">
          <Col xs="7" sm="8" md="7" lg="6" xl="5">
            <FormControl type="text" placeholder="Enter name" className="mr-sm-2" />
          </Col>
          <Col xs="3" sm="4" md="3" lg="2" xl="2">
            <Button variant="outline-success">Search</Button>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs="5" sm="6" md="4" lg="3" xl="2">
            <Form.Label>Type video</Form.Label>
            <Form.Control as="select">
              <option value="">All</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </Form.Control>
          </Col>
          <Col xs="5" sm="6" md="4" lg="3" xl="2">
            <Form.Label>Year of release. </Form.Label>
            <Form.Control type="number" placeholder="Enter year" />
          </Col>
        </Row>
      </Container>
    );
  }
}

FormSearch.propTypes = {
  getFilmsInfo: PropTypes.func,
};

export default FormSearch
