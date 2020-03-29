import React from 'react';
import {Row,Col} from 'react-bootstrap';
import { faSpotify, faApple, faSoundcloud,faItunes, faGoogle } from '@fortawesome/free-brands-svg-icons'
import IconLink from './icon-link';

export default function HostedLinks(){
    return (
            <Row>
                <Col>
                    <IconLink icon={faApple} size={'3x'}/>
                    <IconLink icon={faSpotify} size={'3x'}/>
                    <IconLink icon={faSoundcloud} size={'3x'}/>
                    <IconLink icon={faItunes} size={'3x'}/>
                    <IconLink icon={faGoogle} size={'3x'}/>
                </Col>
            </Row>
    );
}