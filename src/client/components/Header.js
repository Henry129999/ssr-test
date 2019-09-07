import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import styles from './Header.css';
import DrawStyle from "../DrawStyle";

class Header extends Component {
  componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.__css.push(styles._getCss()));
  }

  render() {
    return(
      <div>
        <p className={styles.header}>这是一个header</p>
        <Link to='./login'>login</Link>
      </div>
    )
  }
}

export default connect()(DrawStyle(Header, styles));