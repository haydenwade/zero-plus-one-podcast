import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialLinks from '../components/social-links'
import HostedLinks from '../components/hosted-links';
import CopyrightFooter from '../components/copyright-footer';

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
                        <h1 className="red"><strong>ZERO + ONE</strong></h1>
                        <h2><strong>A PODCAST BY HAYDEN WADE</strong></h2>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                    We strive to bring you the most valuable insights into becoming and being a successful software engineer. 
                    Our host Hayden Wade has coded until his fingers were sore but most of all he enjoys mentoring aspiring engineers, speaking at Universities, 
                    and petting alpacas in his spare time. In these episodes of the Zero Plus One Podcast we will cover everything from how to land your dream job, career advice, tech, 
                    and hear extraordinary guests talk about their journey to success.
                    <hr/>
                </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <h3>Where to find the podcast?</h3>
                        <HostedLinks />
                        <p>
                            Available on all major podcast platforms and you can also listen along below. All podcasts are recorded on video as well and those can be found on our <a className="red" href="https://www.youtube.com/channel/UCoFZsE7M5Bw_RK-7p3VRsnQ" target="_blank" rel="noopener noreferrer">YouTube</a> channel.
                        </p>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <div id="buzzsprout-large-player-987628"></div>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col className="center">
                        <p>
                            Be sure to follow us on social for behind the scenes and get notified when the next episode drops. Don't miss out!
                        </p>
                        <SocialLinks />
                        <hr/>
                    </Col>
                </Row>
                <CopyrightFooter/>
            </Container>
        );
    }
}