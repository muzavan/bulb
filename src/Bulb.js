import React from 'react';
import './Bulb.css';

import { FaLightbulb } from 'react-icons/fa';

const strokeWidth = 28;
const bulbSize = 126;

const yellowBright = "#fcf787";
const darkBlack = "#696969";
const smoothWhite = "#f8f8ff";

class Bulb extends React.Component {
    constructor(props){
        super(props);

        this.idx = props.bulbIdx;
        this.globalSwitchBulb = props.handler;
        this.switchBulb = this.switchBulb.bind(this);
    }

    switchBulb() {
        this.globalSwitchBulb(this.idx);
    }

    render(){
        const fillColor = this.props.bulbOn ? yellowBright : smoothWhite;
        return (
            <span className="Bulb" onClick={this.switchBulb}>
               <FaLightbulb stroke={darkBlack} strokeWidth={strokeWidth} fill={fillColor} size={bulbSize}/>
            </span>
        );
    }
}

export default Bulb;