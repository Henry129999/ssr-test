import React, { Component } from 'react';

export default function DrawStyle(DecoratedComponent, styles) {
  return class NewComponent extends Component {
    componentWillMount() {
      const { staticContext } = this.props;
      staticContext && (staticContext.__css.push(styles._getCss()));
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}