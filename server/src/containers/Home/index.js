import React from 'react';

function handleClick() {
  return <alert>click</alert>
}

function home () {
  return <div>
    ssr-test1
    <button onClick={handleClick}>click</button>
  </div>
}

export default home;
