import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconLink(props){
    return (
        <a className={'link-icon ' + props.className} target="_blank" href={props.href} rel="noopener noreferrer" >
           <FontAwesomeIcon icon={props.icon} size={props.size}/>
        </a>
    );
}