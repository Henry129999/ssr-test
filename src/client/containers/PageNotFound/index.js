import React, { Component } from 'react';

class PageNotFound extends Component {

  componentWillMount() {
    const { staticContext } = this.props;
    staticContext && (staticContext.NOT_FOUND = true);
  }

  render() {
    return (
      <div>
        <p>Page Not Found</p>
      </div>
    )
  }
}

export default PageNotFound;