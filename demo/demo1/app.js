import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

ReactDOM.render((
  <div className="remoteComponent">
    <div className="header">
      <p className="test">example: This is a try!</p>
    </div>
  </div>
), document.getElementById('app'));
