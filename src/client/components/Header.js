import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return(
      <div>
        <p>这是一个header</p>
        <Link to='./login'>login</Link>
      </div>
    )
  }
}