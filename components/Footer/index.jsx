import React from 'react';
import config from '../../_theme';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        {config.footer ? config.footer : null}
        {
          config.hideBisheng ? null :
          <p className="copyright">powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></p>
        }
      </div>
    );
  }
}
