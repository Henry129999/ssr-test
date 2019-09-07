import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addName, getUserInfo, actionLogin, actionLogout, actionGetLoginStatus,
  actionGetTranslationList,
} from '../../action/user';
import styles from './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      translationList: [],
    }
  }

  componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.__css = styles._getCss());
  }

  // componentDidMount在服务器端上是不执行的，所有在服务器端上不会发送请求
  componentDidMount() {
    const { dispatch, user: { newsList, login } } = this.props;
    if (!newsList.length) {
      dispatch(getUserInfo());
    }
    if (login) {
      this.handleGetNewsList();
    }
  }

  handleGetNewsList = () => {
    const { dispatch } = this.props;
    dispatch(actionGetTranslationList())
      .then(res => {
        this.setState({
          translationList: res.data || [],
        })
      })
  };

  handleAddName = () => {
    const { dispatch } = this.props;
    dispatch(addName('hao'));
  };

  handleLogin = () => {
    const { dispatch } = this.props;
    dispatch(actionGetLoginStatus())
      .then(res => {
        if (res) {
          dispatch(actionLogin())
            .then(() => {
              this.handleGetNewsList();
            });
        }
      });
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(actionLogout());
  };

  render() {
    const { user = {} } = this.props;
    const { newsList = [], login } = user;
    const { translationList } = this.state;

    return (
      <div>
        <div>
          {newsList.map((item) => <div key={item.id}>{item.title}</div>)}
        </div>
        <button onClick={this.handleAddName}>addName</button>
        <p>------------------------------------------------</p>
        { login
          ? <div className={styles.login} onClick={this.handleLogout}>退出</div>
          : <div className={styles.login} onClick={this.handleLogin}>登陆</div> }
        <br/>
        <p>-----------------------新闻列表-------------------------</p>
        { login && translationList.map(item => (
          <p key={item.id}>{item.title}</p>
        )) }
        <p>-----------------------新闻列表-------------------------</p>
        <br/>
      </div>
    )
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
