import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import backG from '../resources/images/codeImg.jfif';
import portrait from '../resources/images/seniorPortrait.jpeg';
import backG2 from '../resources/images/coderImg2.jpg';
import backG3 from '../resources/images/coderImg3.jpg'

export default function About() {
    return (

        <Container>
            <Row>
                <Col xs={12} md={6} lg={6}>
                    <Card className="my-2 mb-2" text='light' bg='info' border="primary">
                        <Card.Img src={portrait} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Header>Alec McGlone</Card.Header>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <Card className="mb-2 my-5" text='light' bg='info' border="primary">
                        <Card.Header>MERN Stack Specialist</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Full Stack Web Developer eager to build multifaceted user driven applications. I am well versed and experienced in using the following technologies: MERN Stack (MongoDB, Express.js, React.js, Node.js), Bootstrap, Material-ui, Apollo Server, and GraphQL. Professionally, I excel as a team player, thinking logically, and innovating new ways to solve problems. My most recent accomplishments would be preparing a new non-profit organization’s online presence by creating a web application. I graduated from the UConn Coding Bootcamp for Full Stack Web Development Certificate Program. In the past I believed showing dedication, hard-work and reliability was all that was needed for success. Now I know it is merely a starting point to pave the pathway for what can come next.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={12} lg={12}>
                    <Card className="mb-2 my-5 text-light" text='center' bg='info' border="primary">
                        <Card.Body>
                            {/* <Card.Title></Card.Title> */}
                            <Card.Text>
                                Adaptable team player and eager to start building applications. Strengths in logical thinking, teamwork, and innovation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col xs={12} md={4} lg={4}>
                    <Card className="mb-2" text='light' bg='info' border="primary" >
                        <Card.Img src={backG2} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Card className="mb-2" text='light' bg='info' border="primary" >
                        <Card.Img src={backG} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <Card className="mb-2" text='light' bg='info' border="primary" >
                        <Card.Img src={backG3} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <div id="aboutSpacing"></div>
        </Container>
    );
}
