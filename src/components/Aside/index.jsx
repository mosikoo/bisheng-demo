import React from 'react';
import { Link } from 'react-router';
import lists from '../../mock/list.json';
import config from '../../_theme';

require('./style.less');

const { rootPath } = config;

export default class Aside extends React.Component {
  render() {
    const { route } = this.props;
    return (
      <div className="aside">
        {lists.map((list, index) =>
          <div key={index}>
            <h3 className="category-name">{list.name}</h3>
            <ul>
              {
                list.components.map((component, idx) =>
                  <li key={`${component.name}${idx}`} className={route === component.route ? 'active' : ''}>
                    <Link to={`${rootPath}posts/${component.route}`}>{component.name}<small>{component.cName}</small></Link>
                  </li>
                )
              }
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Aside.propTypes = {
  route: React.PropTypes.string
};

Aside.defaultProps = {
  route: ''
};

