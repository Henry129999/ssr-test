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
  }

  // componentDidMount在服务器端上是不执行的，所有在服务器端上不会发送请求
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserInfo());
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
      <Header />
      ssr-test1, age: { age }
      <p>
        {newsList.map((item) => <span key={item.id}>{item.title}</span>)}
      </p>
      <button onClick={this.handleClick}>click</button>
      <button onClick={this.handleAddName}>addName</button>
    </div>
  }
}

Home.loadData = () => {
  // 负责在服务器端渲染前，把这个路由需要的数据提前加载好
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    user: state.user,
  }
};
export default connect(mapStateToProps)(Home);
