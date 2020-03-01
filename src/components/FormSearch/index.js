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
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <FormControl type="text" placeholder="Enter name" className="mr-sm-2" />
          </Col>
          <Col sm="2">
            <Button variant="outline-success">Search</Button>
          </Col>
        </Row>
        <Row>
          <Col sm="3">
            <Form.Label>Type video</Form.Label>
            <Form.Control as="select">
              <option value="">All</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </Form.Control>
          </Col>
          <Col sm="3">
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
