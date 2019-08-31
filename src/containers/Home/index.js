import React from 'react';

function handleClick() {
  console.log('1111', 1111);
}

function home () {
  return <div>
    ssr-test1
    <button onClick={handleClick}>click</button>
  </div>
}

export default home;
