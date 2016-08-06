import 'font-awesome/css/font-awesome.min.css';
import React from 'react';

const Player = () => {
  return <div>
    <div className="player">
      <p className="title">Goo Goo Dolls - No name face</p>
      <div className="controls">
        <div className="buttons">
          <i className="fa fa-2x fa-play" aria-hidden="true"></i>
          <i className="fa fa-2x fa-stop" aria-hidden="true"></i>
        </div>
        <div className="main-bar"></div>
      </div>
      <div className="progress-bar"></div>
    </div>
  </div>;
}

export default Player;
