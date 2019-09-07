import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  render() {
    const { user: { login } } = this.props;
    return login ? (
      <div>
        <p>登陆页</p>
        <Link to='/'>首页</Link>
      </div>
    ) : (
      <Redirect to='/' />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};
export default connect(mapStateToProps)(Login);