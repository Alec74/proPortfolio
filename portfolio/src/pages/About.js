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
                            <Card.Body>
                                <Card.Title>Full Stack Web Developer</Card.Title>
                            </Card.Body>
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
        </Container>






        // <div>
        //   <div class="container py-3" id="aboutMe">
        //         <div class="row heading">
        //             <div class="col-4">
        //                 <div class="card">
        //                     <img src={portrait} class="card-img-bottom" alt="senior portrait"></img>
        //                 </div>
        //             </div>
        //             <div class="col-8">
        //                 <div class="text-muted card">
        //                     <h5 class="card-header font-head change text-light">Alec McGlone</h5>
        //                     <div class="card-body change">
        //                         <h5 class="card-title font-head text-light">About Me</h5>
        //                         <p class="card-text font-text text-light">I am currently a student of the UConn Coding 
        //                             Bootcamp for Full Stack Web Development. My goals are to learn efficient ways to build 
        //                             multifaceted user driven applications. </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
