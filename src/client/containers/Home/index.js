import React, { Component } from 'react';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { addName } from '../../action/user';
import { getUserInfo } from '../../action/user';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: 12,
    }
    console.log('props', props);
  }

  componentDidMount() {
    this.props.getUserInfo();
  }

  handleClick = () => {
    console.log('1111', 1111);
  };

  handleAddName = () => {
    const { dispatch } = this.props;
    dispatch(addName('hao'));
  };

  render() {
    const { age } = this.state;

    return <div>
      <Header />
      ssr-test1, age: { age }
      <button onClick={this.handleClick}>click</button>
      <button onClick={this.handleAddName}>addName</button>
    </div>
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.user,
  }
};
const mapDispatchToProps = (dispatch) => ({
  getUserInfo() {
    dispatch(getUserInfo())
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
