import React from 'react';
import { Carousel, Card, Col, Row } from 'react-bootstrap';
import './sheet.css'

const HomePage = (props) => {
    return <div>
        <div className='container mt-5'>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            style={{ height: "50vh" }}
                            className="d-block w-100"
                            src={props.Images.PlaceOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            style={{ height: "50vh" }}
                            className="d-block w-100"
                            src={props.Images.PlaceTwo}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "50vh" }}
                            className="d-block w-100"
                            src={props.Images.PlaceThree}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className='mt-5 border border-dark rounded' style={{backgroundColor:'slateblue'}}>
                <div className="ms-3 me-3">
                    <h2 className='text-center text-light mt-3 border border-info p-3 rounded h'><b><u>Food Gallery</u></b></h2>
                </div>
                <Row xs={1} md={2} className="g-4 m-4">
                    {props.data.map((item, idx) => (
                        <Col >
                            <Card >
                                <Card.Img variant="top" src={item.src} height={'300px'} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div >;
};

export default HomePage;
