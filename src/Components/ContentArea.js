import React, { Component } from 'react';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Radio, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { data } from '../data';

class ContentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      reljs: '',
      whyjs: '',
      seen: '',
      rate: '',
      dream: '',
      oneyear: '',
      feedback: '',
      checked: ['', '', ''],
      msg: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCheck(num, id) {
    let checked = this.state.checked;
    checked[num] = id;
    this.setState({checked});
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, reljs, whyjs, seen, rate, dream, oneyear, feedback } = this.state;
    const realData = { name, reljs, whyjs, seen, rate, dream, oneyear, feedback };
    this.props.handleData(realData);
    this.handleReset();
    this.setState({msg: true});
  }

  handleAutoFill() {
    this.setState({
      name: 'Zonayed Ahmed',
      reljs: data.reljs[6],
      whyjs: 'I want to be a web developer',
      seen: data.seen[1],
      rate: data.rate[5],
      dream: 'I want to make Web Application. JavaScript can help me with that',
      oneyear: 'Senior Software Developer',
      feedback: 'No Comment',
      checked: [6, 2, 5]
    })
    this.setState({msg: false});
  }

  handleReset() {
    this.setState({
      name: '',
      reljs: '',
      whyjs: '',
      seen: '',
      rate: '',
      dream: '',
      oneyear: '',
      feedback: '',
      checked: ['', '', '']
    })
    this.setState({msg: false});
  }

  render() {
    const { name, reljs, whyjs, seen, rate, dream, oneyear, feedback, checked, msg } = this.state;
    const isSubmitAllowed = (name && reljs && whyjs && seen && rate && dream && oneyear && feedback) ? true : false;
    const isResetAllowed = (name || reljs || whyjs || seen || rate || dream || oneyear || feedback) ? true : false;
    return (
      <div className="content-area">
        <Grid bsClass="container">
          <Row>
            <Col md={8} mdOffset={2}>
              <div className="content">
                <h1>Demo Fake Poll</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <form>
                  <FormGroup
                    controlId="name"
                  >
                    <ControlLabel>Your Name: </ControlLabel>
                    <FormControl
                      type="text"
                      value={name}
                      placeholder={data.name}
                      onChange={(e) => this.setState({name: e.target.value})}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="reljs"
                    value={reljs}
                    onChange={(e) => this.setState({reljs: e.target.value})}
                  >
                    <ControlLabel>Your Relationship with JavaScript: </ControlLabel>
                    {data.reljs.map((oneData, index) => <Radio key={index} name={`reljs-${index}`} checked={index === checked[0]} onChange={() => this.handleCheck(0, index)} value={oneData}>{oneData}</Radio>)}
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="whyjs"
                  >
                    <ControlLabel>Why do you want to learn JavaScript: </ControlLabel>
                    <FormControl
                      type="text"
                      value={whyjs}
                      placeholder={data.whyjs}
                      onChange={(e) => this.setState({whyjs: e.target.value})}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="seen"
                    value={seen}
                    onChange={(e) => this.setState({seen: e.target.value})}
                  >
                    <ControlLabel>You found this project on: </ControlLabel>
                    {data.seen.map((oneData, index) => <Radio key={index} name={`seen-${index}`} checked={index === checked[1]} onChange={() => this.handleCheck(1, index)} value={oneData}>{oneData}</Radio>)}
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="rate"
                    value={rate}
                    onChange={(e) => this.setState({rate: e.target.value})}
                  >
                    <ControlLabel>How do you rate my code: </ControlLabel>
                    {data.rate.map((oneData, index) => <Radio key={index} name={`rate-${index}`} checked={index === checked[2]} onChange={() => this.handleCheck(2, index)} value={oneData}>{oneData}</Radio>)}
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="dream"
                  >
                    <ControlLabel>How JavaScript can fulfill your dream: </ControlLabel>
                    <FormControl
                      type="text"
                      value={dream}
                      placeholder={data.dream}
                      onChange={(e) => this.setState({dream: e.target.value})}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup
                    controlId="oneyear"
                  >
                    <ControlLabel>What position do you want to see yourself after one year: </ControlLabel>
                    <FormControl
                      type="text"
                      value={oneyear}
                      placeholder={data.oneyear}
                      onChange={(e) => this.setState({oneyear: e.target.value})}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>*Required</HelpBlock>
                  </FormGroup>
                  <FormGroup controlId="feedback">
                    <ControlLabel>Your Feedback About me</ControlLabel>
                    <FormControl componentClass="textarea" value={feedback} onChange={(e) => this.setState({feedback: e.target.value})} placeholder={data.feedback} />
                  </FormGroup>
                  <Button className="btn-submit" disabled={!isSubmitAllowed} type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                  <Button className="btn-autofill" disabled={isSubmitAllowed} onClick={() => this.handleAutoFill()}>Autofill</Button>
                  <Button className="btn-reset" disabled={!isResetAllowed} onClick={() => this.handleReset()}>Reset</Button>
                </form>
                {msg ? (!isResetAllowed ? <Alert bsStyle="success">
                  <strong>Submitted</strong> You can fill as many poll as you want. Feel free to see all the polls <Link to="/results">here</Link>.
                </Alert> : null) : null}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ContentArea;
