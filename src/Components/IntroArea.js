import React from 'react';
import { Grid, Row, Col, Jumbotron, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const IntroArea = ({totalItems, location}) => {
  return (
    <Jumbotron className="jumbotron-area">
      <Grid bsClass="container">
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="intro-text">
              <img alt="logo" src={logo} />
              <h1>React Fake Poll</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
              <p>
                {location.pathname !== '/results' ? <Link to="/results" className="btn btn-result">See Polls <Badge>{totalItems === 0 ? 'Empty': totalItems}</Badge></Link> : <Link to="/" className="btn btn-result">Create New Poll</Link>}
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </Jumbotron>
  )
}

export default IntroArea;
