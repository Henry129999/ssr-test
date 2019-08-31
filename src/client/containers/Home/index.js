import React from 'react';
import Header from "../../components/Header";
import { connect } from 'react-redux';
import { addName } from '../../action/user';


function Home (props) {
  console.log('props', props);

  function handleClick() {
    console.log('1111', 1111);
  }

  function handleAddName() {
    const { dispatch } = props;
    dispatch(addName('hao'));
  }

  return <div>
    <Header />
    ssr-test1
    <button onClick={handleClick}>click</button>
    <button onClick={handleAddName}>addName</button>
  </div>
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.user,
  }
};
export default connect(mapStateToProps, null)(Home);
