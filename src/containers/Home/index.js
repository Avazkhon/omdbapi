import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Layout from '../Layout';

import {
  getFilmsInfo
} from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    const { getFilmsInfo } = this.props;
    if (typeof getFilmsInfo === 'function') {
      getFilmsInfo();
    }
    // fetch('http://www.omdbapi.com/?t=joker&apikey=1977b733')
    // .then((a) => {
    //   console.log('a', a);
    // })
  }

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col sm="8">
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
      </Layout>
    );
  }
}

Home.propTypes = {
  getFilmsInfo: PropTypes.func,
};

function mapStateToProps(state) {
  const {
    films,
  } = state;
  return {
    films,
  };
}

export default connect(mapStateToProps, {
  getFilmsInfo
})(Home);
