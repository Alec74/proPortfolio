import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion'
import Fade from 'react-bootstrap/Fade'


export default function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} lg={12}>
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Email</Accordion.Header>
                                <Accordion.Body>
                                    <address>
                                        Send an email to me by clicking <button type="button" class="btn btn-outline-info"><a href="mailto:alecmcglone@gmail.com">here</a></button><br />
                                    </address>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Github</Accordion.Header>
                                <Accordion.Body>
                                    <button type="button" class="btn btn-outline-info">
                                        <a class="nav-link text-dark"
                                            href="https://github.com/Alec74">
                                            Github Profile
                                        </a>
                                    </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>LinkedIn Profile</Accordion.Header>
                                <Accordion.Body>
                                    <button type="button" class="btn btn-outline-info">
                                        <a class="nav-link text-dark"
                                            href="https://www.linkedin.com/in/alec-mcglone-900904206/">
                                            LinkedIn Profile
                                        </a>
                                    </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Resume</Accordion.Header>
                                <Accordion.Body>
                                    <button type="button" class="btn btn-outline-info">
                                        <a class="nav-link text-dark" href="info/resume.pdf">Resume</a>
                                    </button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Phone Number</Accordion.Header>
                                <Accordion.Body>
                                    <p>203-856-7364</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
