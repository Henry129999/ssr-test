import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../../action/user';
import { getUserInfo } from '../../action/user';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      age: 12,
    }
  }

  // componentDidMount在服务器端上是不执行的，所有在服务器端上不会发送请求
  componentDidMount() {
    const { dispatch, user } = this.props;
    if (!user.newsList.length) {
      dispatch(getUserInfo());
    }
  }

  handleClick = () => {
    console.log('1111', 1111);
  };

  handleAddName = () => {
    const { dispatch } = this.props;
    dispatch(addName('hao'));
  };

  render() {
    const { user = {} } = this.props;
    const { newsList = [] } = user;
    const { age } = this.state;
    console.log('newsList', newsList);

    return <div>
      ssr-test1, age: { age }
      <div>
        {newsList.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
      <button onClick={this.handleClick}>click</button>
      <button onClick={this.handleAddName}>addName</button>
    </div>
  }
}

Home.loadData = (store) => {
  // 负责在服务器端渲染前，把这个路由需要的数据提前加载好
  return store.dispatch(getUserInfo(true));
};

const mapStateToProps = state => {
  return {
    user: state.user,
  }
};
export default connect(mapStateToProps)(Home);
