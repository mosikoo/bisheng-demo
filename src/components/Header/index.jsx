import React from 'react';
import { Link } from 'react-router';
import config from '../../_theme';

require('./Header.less');

const { rootPath } = config;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header">
          <a className="logo" href={rootPath} />
        </div>
        <div className="headerBlank" />
      </div>
    );
  }
}
