import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialLinks from '../components/social-links'
import HostedLinks from '../components/hosted-links';
import CopyrightFooter from '../components/copyright-footer';

export default class HomePage extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://www.buzzsprout.com/987628.js?container_id=buzzsprout-large-player-987628&player=large";
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
                        <h1 className="red"><strong>ZERO + ONE</strong></h1>
                        <h2><strong>A PODCAST BY HAYDEN WADE</strong></h2>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        We strive to bring you the most valuable insights into becoming and being a successful software engineer.
                        Our host <a className="red" href="https://www.haydenwade.com" target="_blank" rel="noopener noreferrer">Hayden Wade</a> has coded until his fingers were sore but most of all he enjoys mentoring aspiring engineers, speaking at Universities,
                        and petting alpacas in his spare time. In these episodes of the Zero Plus One Podcast we will cover everything from how to land your dream job, career advice, tech,
                        and hear extraordinary guests talk about their journey to success.
                    <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <h3>Career Coaching And More!</h3>
                        Head on over to <a className="red" href="https://www.haydenwade.com" target="_blank" rel="noopener noreferrer">haydenwade.com</a> to get the help you need to level up in life and in your career!
                        <ul className="no-bullets">
                            <li><a className="red" href="https://www.haydenwade.com/services/career-coaching" target="_blank" rel="noopener noreferrer">Career Coaching</a></li>
                            <li><a className="red" href="https://www.haydenwade.com/services/resume-review" target="_blank" rel="noopener noreferrer">Resume Review</a></li>
                            <li><a className="red" href="https://www.haydenwade.com/services/salary-negotiation" target="_blank" rel="noopener noreferrer">Salary Negotiation</a></li>
                            <li><a className="red" href="https://www.haydenwade.com/services/consulting" target="_blank" rel="noopener noreferrer">Consulting</a></li>
                        </ul>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="center">
                        <h3>Where to find the podcast?</h3>
                        <HostedLinks />
                        <p>
                            Available on all major podcast platforms and you can also listen along below. All podcasts are recorded on video as well and those can be found on our <a className="red" href="https://www.youtube.com/channel/UCoFZsE7M5Bw_RK-7p3VRsnQ" target="_blank" rel="noopener noreferrer">YouTube</a> channel.
                        </p>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="center">
                        <img src="assets/google-home-clear.png" alt="Ok Google, play the Zero Plus One Podcast" width="100%" />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img src="assets/alexa-clear.png" alt="Alexa, play the Zero Plus One Podcast" width="100%" />
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="center">
                        <div id="buzzsprout-large-player-987628"></div>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <p>
                            Be sure to follow us on social for behind the scenes and get notified when the next episode drops. Don't miss out!
                        </p>
                        <SocialLinks />
                        <hr />
                    </Col>
                </Row>
                <CopyrightFooter />
            </Container>
        );
    }
}
