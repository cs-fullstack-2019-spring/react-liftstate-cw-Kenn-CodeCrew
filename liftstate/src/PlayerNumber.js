import React, { Component } from 'react';

class PlayerNumber extends Component{

    buttonPress=(e)=>{
        this.props.changeLastPressed(this.props.number);
        this.props.updatePlayerScore(this.props.number);
    };

    render(){
        return(
            <div>
                <h1>Player {this.props.number}</h1>
                <h1>Score: {this.props.score}</h1>
                <button onClick={this.buttonPress}>Click</button>
            </div>
    );
    }
}

export default PlayerNumber;