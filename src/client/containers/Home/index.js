import React from 'react';
import Header from "../../components/Header";

function handleClick() {
  console.log('1111', 1111);
}

function Home () {
  return <div>
    <Header />
    ssr-test1
    <button onClick={handleClick}>click</button>
  </div>
}

export default Home;
