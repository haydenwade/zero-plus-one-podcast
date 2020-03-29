import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/social-links'
import HostedLinks from '../components/hosted-links';
export default function HomePage() {
    return (
        <Container className='content'>
            <Row>
                <Col className="center">
                    <h1>Zero + One Podcast</h1>
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    We strive to bring you the most valuable insights into being a successful software engineer. Our host Hayden Wade has coded until his fingers were sore but most of all
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