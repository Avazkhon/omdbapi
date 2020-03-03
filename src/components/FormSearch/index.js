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

  handleChange = (e) => {
    const { name, value} = e.currentTarget;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      }
    }));
  }

  handleSubmit = () => {
    const { getFilmsInfo } = this.props;
    const { data } = this.state;
    if (typeof getFilmsInfo === 'function') {
      getFilmsInfo(data);
    }
  }

  render() {
    return (
      <Container className="form-search">
        <Row className="justify-content-center">
          <Col xs="7" sm="8" md="7" lg="6" xl="5">
            <FormControl
              name="search"
              type="text"
              placeholder="Enter name"
              className="mr-sm-2"
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="3" sm="4" md="3" lg="2" xl="2">
            <Button
              variant="secondary"
              onClick={this.handleSubmit}
            >
              Search
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="6" sm="6" md="5" lg="4" xl="4">
            <Form.Control
              name="year"
              type="number"
              placeholder="Enter year of release"
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="6" sm="6" md="5" lg="4" xl="3">
            <Form.Control
              as="select"
              name="typeVideo"
              onChange={this.handleChange}
            >
              <option value="">Select type films</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </Form.Control>
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
