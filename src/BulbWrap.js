import React from 'react';
import './Bulb.css';
import Bulb from './Bulb.js';

const StateLosing = -1;
const StateInGame = 0;
const StateWinning = 1;

class BulbWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: props.maxSteps,
            arr: props.bulbArr,
            gameState: StateInGame,
        }

        this.switchBulb = this.switchBulb.bind(this);
    }

    switchBulb(idx) {
        // Update Bulb
        let currArr = this.state.arr;
        for(let i = idx; i < currArr.length; i++){
            currArr[i] = (currArr[i] + 1) % 2;
        }
        
        // Update Remaining Step
        let step = this.state.step - 1;
        step = step > 0 ? step : 0;

        let gameState = this.state.gameState;
        if (gameState === StateInGame) {
            let allOn = true;
            for(let currBulb of currArr){
                if(currBulb === 0){
                    allOn = false;
                    break;
                }
            }

            if (allOn) {
                gameState = StateWinning;
            } else if (step === 0){
                gameState = StateLosing;
            }
        }

        this.setState (state => ({
            ...state,
            arr: currArr,
            step: step,
            gameState: gameState,
        }));
    }

    getBulbs() {
        var bulbs = [];

        for(let idx in this.state.arr){
            let bulbOn = this.state.arr[idx] === 1;
            bulbs.push(<Bulb handler={this.switchBulb} key={idx} bulbIdx={idx} bulbOn={bulbOn} />)
        }

        return bulbs;
    }

    render(){
        let gameStateInfo =  "In Game";
        if (this.state.gameState === StateWinning){
            gameStateInfo = "Winning!";
        }

        if (this.state.gameState === StateLosing){
            gameStateInfo = "Losing :(";
        }

        return (
            <div className="BulbWrap">
                <h3> Remaining Step(s): {this.state.step}x </h3>
                <h3> State: {gameStateInfo} </h3>

                {this.getBulbs()}
                
            </div>
        );
    }
}

export default BulbWrap;