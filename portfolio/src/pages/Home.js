import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import html from '../resources/images/html.jfif';
import CSS from '../resources/images/CSS.png';
import JS from '../resources/images/javascript.jfif';
import express from '../resources/images/express.jfif';
import mongodb from '../resources/images/mongodb.jfif';
import react from '../resources/images/react.jfif';
import node from '../resources/images/node.jfif';

export default function Home() {
    return (
        <div>
            <header>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Full Stack Web Developer : MERN Stack Oriented
                            </h1>
                        </Col>
                    </Row>
                    <Row className="my-2 mb-2">
                        <Col xs={12} md={6} lg={6}>
                            <Card className="mb-2" text='light' bg='info' border="primary" >
                                <Card.Img src={mongodb} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Card className="mb-2" text='light' bg='info' border="primary" >
                                <Card.Img src={express} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                        <Card className="mb-2" text='light' bg='info' border="primary" >
                                <Card.Img src={react} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                        <Card className="mb-2" text='light' bg='info' border="primary" >
                                <Card.Img src={node} alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}
