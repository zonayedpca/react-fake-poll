import React from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer-area">
      <Grid bsClass="container">
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="footer">
              <ListGroup bsClass="list-inline">
                <ListGroupItem bsClass="list-inline-item">React</ListGroupItem>
                <ListGroupItem bsClass="list-inline-item">React Router</ListGroupItem>
                <ListGroupItem bsClass="list-inline-item">Love</ListGroupItem>
                <ListGroupItem bsClass="list-inline-item">With</ListGroupItem>
                <ListGroupItem bsClass="list-inline-item"><a rel="noopener noreferrer" href="https://www.zonayed.me" target="_blank" >Zonayed Ahmed</a></ListGroupItem>
              </ListGroup>;
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default Footer;
