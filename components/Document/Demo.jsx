import React from 'react';
import classnames from 'classnames';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.extend = this.extend.bind(this);
  }

  componentDidMount() {
    this.height = this.comp ? this.comp.offsetHeight : '0px';
  }

  extend() {
    this.setState({
      visible: !this.state.visible
    });
  }
  render() {
    const { utils, description, content, jscode, meta } = this.props;
    const { visible } = this.state;
    const codeDescriptionClass = classnames('code-description', { extend: visible });
    const specificCodeStyle = visible ? { height: this.height } : { height: '0px' };

    return (
      <div className="code-boxes">
        <section className="code-box">
          <section className="show-Component">
            {utils.toReactComponent(content)}
          </section>
          {
            !description ? null :
            <section className={codeDescriptionClass}>
              <div className="title">{meta.title}</div>
              {utils.toReactComponent(description)}
              <i className="kuma-icon kuma-icon-chevron-down collapse" onClick={this.extend} />
            </section>
          }
          {
            !jscode ? null :
            <section className="specific-code" style={specificCodeStyle}>
              <div
                ref={(s) => { this.comp = s; }}
              >
                {utils.toReactComponent(jscode)}
              </div>
            </section>
          }
        </section>
      </div>
    );
  }
}
