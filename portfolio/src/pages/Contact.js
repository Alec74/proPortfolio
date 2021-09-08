import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Accordion from 'react-bootstrap/Accordion'
import Fade from 'react-bootstrap/Fade'


const handleChange = (event) => {
    event.preventDefault();

    let sub = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let subW = sub.split(' ');
    let bodyW = body.split(' ');

    let nextS;
    let nextB;

    if (subW.length >= 2) {
        nextS = sub.replace(/ /g, '%20');
    } else {
        nextS = sub;
    }

    if (bodyW.length >= 2) {
        nextB = body.replace(/ /g, '%20');
    } else {
        nextB = body;
    }

    if (sub && body) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?subject=" + nextS + "&body=" + nextB;
    } else if (sub) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?subject=" + nextS;
    } else if (body) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?body=" + nextB;
    };
};

// handle contact form submit to open prepopulated email from default app
const handleFormSubmit = (event) => {
    event.preventDefault();

    let sub = document.getElementById("subject").value;
    let body = document.getElementById("body").value;
    let subW = sub.split(' ');
    let bodyW = body.split(' ');

    let nextS;
    let nextB;

    if (subW.length >= 2) {
        nextS = sub.replace(/ /g, '%20');
    } else {
        nextS = sub;
    }
    console.log(nextS);
    if (bodyW.length >= 2) {
        nextB = body.replace(/ /g, '%20');
    } else {
        nextB = body;
    }
    console.log(nextB);

    if (sub && body) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?subject=" + nextS + "&body=" + nextB;
    } else if (sub) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?subject=" + nextS;
    } else if (body) {
        document.getElementById('aTag').href = "mailto:alecmcglone@gmail.com?body=" + nextB;
    };
};



export default function Contact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} lg={12}>
                        <h1 className="text-light">Contact Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Email</Accordion.Header>
                                <Accordion.Body>
                                    <h3>Send me an Email Via the Form Below</h3>
                                    <Form onSubmit={handleFormSubmit}>
                                        <Form.Group className="mb-3" controlId="Subject.ControlInput1">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control onChange={handleChange} id="subject" size="lg" type="subject" placeholder="Your subject here" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="Body.ControlTextarea1">
                                            <Form.Label>Body</Form.Label>
                                            <Form.Control onChange={handleChange} id="body" placeholder="Your message here" as="textarea" rows={3} />
                                        </Form.Group>
                                        <Button id="buttonColor" type="submit">
                                            <a id="aTag"
                                                target="_top">
                                                Send email!
                                            </a>
                                        </Button>
                                    </Form>
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
            <div id="contactSpacing"></div>
        </div>
    );
}
