import React from 'react';
import { Grid, Row, Col, Alert, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResultArea = ({answers}) => {
  return (
    <div className="content-area">
      <Grid bsClass="container">
        <Row>
          <Col md={8} mdOffset={2}>
            <div className="content">
              {answers.length !== 0 ? (<div><h1>Results</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              {answers.map(answer => <div>
                <h3>{answer.name}</h3>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Answer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Relationship with JavaScript</td>
                      <td>{answer.reljs}</td>
                    </tr>
                    <tr>
                      <td>Why JavaScript</td>
                      <td>{answer.whyjs}</td>
                    </tr>
                    <tr>
                      <td>Found this Project</td>
                      <td>{answer.seen}</td>
                    </tr>
                    <tr>
                      <td>Rating</td>
                      <td>{answer.rate}</td>
                    </tr>
                    <tr>
                      <td>Dream</td>
                      <td>{answer.dream}</td>
                    </tr>
                    <tr>
                      <td>Career Expectation</td>
                      <td>{answer.oneyear}</td>
                    </tr>
                    <tr>
                      <td>Feedback</td>
                      <td>{answer.feedback}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>)}
            </div>) : (<div>
              <Alert bsStyle="warning">
                <strong>Nothing Found</strong> Your Poll List is Empty. Create one <Link to="/">here</Link>
              </Alert>;
              </div>)}
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}

export default ResultArea;
