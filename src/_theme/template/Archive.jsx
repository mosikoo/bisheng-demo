import React from 'react';
import classnames from 'classnames';
import config from '../';

require('../static/archive.less');

const { rootPath } = config;
const navConfig = [
  { name: 'COMPONENTS', href: `${rootPath}posts/input` },
  { name: 'ABOUT US', href: `${rootPath}posts/input` }
];

export default class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.shwoNav = this.showNav.bind(this); // 不起作用 why?
  }

  showNav() {
    this.setState({
      visible: !this.state.visible
    });
  }

  hideNav() {
    const { visible } = this.state;
    if (!visible) {
      return;
    }
    this.setState({
      visible: false
    });
  }

  renderContent() {
    const { visible } = this.state;
    return (
      <div className={classnames('contentWraper', { minimize: visible })}>
        <h1>CGREACT COMPONENTS</h1>
        <div className="line" />
        <p>Use the CG-REACT component library to complete business codes more efficiently</p>
        <a className="toHome" href={`${rootPath}posts/input`}>go to cg-react</a>
      </div>
    );
  }

  renderNav() {
    const { visible } = this.state;

    return (
      <div className={classnames('nav', visible ? 'show' : 'hide')}>
        <ul className="navMenu">
          {
            navConfig.length > 0 && navConfig.map((item, index) =>
              <li className="init-menu" key={`menu-${index}`}>
                <a data-hover={item.name} href={item.href}>{item.name}</a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

  render() {
    const { visible } = this.state;

    return (
      <div className="archive">
        <div className="bg" />
        <div className={classnames('navbtn', { animate: visible })} onClick={this.showNav.bind(this)}>
          <div className="btnline lineup" />
          <div className="btnline" />
          <div className="btnline linedown" />
        </div>
        <div className={classnames('layer', visible ? 'dark' : 'light')} onClick={this.hideNav.bind(this)} />
        {this.renderContent()}
        {this.renderNav()}
        <div className="copyright">© 2016. Design by CG-Team</div>
      </div>
    );
  }
}
