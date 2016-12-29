import React from 'react';
import Aside from '../Aside';

require('./Body.less');

export default class Body extends React.Component {
  componentWillMount() {
    this.a = true;
  }

  render() {
    const { route } = this.props;
    return (
      <div className="document">
        <Aside route={route} />
        <div className="componentContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  route: React.PropTypes.string,
  children: React.PropTypes.element
};

Body.defaultProps = {
  route: ''
};
