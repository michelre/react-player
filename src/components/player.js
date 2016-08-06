import 'font-awesome/css/font-awesome.min.css';
import React from 'react';


export default class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startTime: 0,
        };
    }
    render(){
        return <div>
            <div className="player">
                <p className="title">{this.props.name}</p>
                <div className="controls">
                    <div className="buttons">
                        <i className="fa fa-2x fa-play" aria-hidden="true"></i>
                        <i className="fa fa-2x fa-stop" aria-hidden="true"></i>
                    </div>
                    <div className="main-bar"></div>
                    <div className="progress-bar">
                        <div className="time">{this.state.startTime.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

Player.propTypes = {
    name: React.PropTypes.string,
};

Player.defaultProps = {
    name: 'Goo Goo Dolls',
}
