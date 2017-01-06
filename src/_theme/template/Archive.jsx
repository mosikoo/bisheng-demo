import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const style = {
    marginTop: '100px',
    fontSize: '30px',
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <Link to={"/posts/input"}>开始使用组件，首页样式后期补上</Link>
    </div>
  );
};
