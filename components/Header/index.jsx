import React from 'react';
import { Link } from 'react-router';
import config from '../../_theme';

require('./Header.less');

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="header">
          <a className="logo" href={'/'} />
          <div className="container">
            <div className="brand">
              {
                !config.tagline ? null :
                <span>- <span className="tagline">{config.tagline}</span></span>
              }
            </div>
            {
              !config.navigation ? null :
              <div className="menu" role="navigation">
                {
                  config.navigation.map((item, index) =>
                    <Link to={item.link} key={index}>{item.title}</Link>
                  )
                }
              </div>
            }
          </div>
        </div>
        <div className="headerBlank" />
      </div>
    );
  }
}
