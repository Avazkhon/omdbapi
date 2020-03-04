import React from 'react';

import {
  Alert,
  Row,
  Col,
} from 'react-bootstrap';

import Layout from '../Layout';

export default function Notfound () {
  return (
    <Layout>
      <Row  className="justify-content-center">
        <Col xs="12" sm="8" md="6">
          <Alert variant="warning">
            <Alert.Heading>Sorry, the page was not found.</Alert.Heading>
            <p>Сheck the link is correct</p>
            <p>Maybe the link is out of date</p>
            <p>or try later</p>
            <hr />
            <p>you can go to the main menu</p>
            <p><a href="mailto:kamalxanovavazxon@gmail.com">write for help</a></p>
          </Alert>
        </Col>
      </Row>
    </Layout>
  )
}
