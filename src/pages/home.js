import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialLinks from '../components/social-links'
import HostedLinks from '../components/hosted-links';
export default class HomePage extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://www.buzzsprout.com/987628.js?container_id=buzzsprout-large-player-987628&player=large&order=date";
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <Container className='content'>
                <Row>
                    <Col className="center">
                        <h1>Zero + One Podcast</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        We strive to bring you the most valuable insights into becoming and being a successful software engineer. Our host Hayden Wade has coded until his fingers were sore but most of all
                        he enjoys mentoring aspiring engineers, speaking at Universities, and petting alpacas in his spare time. Zero Plus One Podcast we will cover everything from how to land your dream job,
                        career advice, tech, and hear extraordinary guests talk about their journey to success.
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
                        <div id="buzzsprout-large-player-987628"></div>
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <SocialLinks />
                    </Col>
                </Row>
            </Container>
        );
    }
}