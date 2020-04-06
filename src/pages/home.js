import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Footer from '../components/social-links'
import HostedLinks from '../components/hosted-links';
export default function HomePage() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Image src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </Col>
            </Row>
            <Row>
                <Col>
                    We strive to bring you the most valuable insights into being or becoming a successful software engineer. Our host Hayden Wade has coded until his fingers were sore but most of all
                    he enjoys mentoring aspiring engineers, speaking at Universities, and petting alpacas in his spare time.
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <h2>Where to find the podcast?</h2>
                    <HostedLinks />
                    <p>
                        Podcasts will be coming soon on a platform near you! Be sure to follow us on social so you don't miss when the first podcast drops, it's going to be fire!
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}