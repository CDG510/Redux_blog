import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render() {
  	//child routes are children, parent is different
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}
