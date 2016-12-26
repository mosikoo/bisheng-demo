import React from 'react';
import { Link } from 'react-router';
import config from '../../_theme';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="brand">
            <Link className="home" to={config.home}>{config.sitename}</Link>
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
    );
  }
}
