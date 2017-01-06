import React from 'react';

require('./Footer.less');

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <span>© 2016. Design by CG-Team</span>
      </div>
    );
  }
}
