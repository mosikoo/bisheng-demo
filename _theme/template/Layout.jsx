import React from 'react';
import { Link } from 'react-router';

if (typeof window !== 'undefined') {
  require('../static/style');
}

const config = require('..');

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderHeader() {
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

  renderFooter() {
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

  renderBody() {
    return (
      <div className="document">
        {this.renderAside()}
        <article className="site-content">{this.props.children}</article>
      </div>
    );
  }

  renderAside() {
    const { lists } = this.props.picked;
    const port = this.props.params.post;

    return (
      <aside id="site-aside" style={{ minWidth: '180px' }}>
        {config.categorys.map(category =>
          <div key={category.id}>
            <h3 className="category-name">{category.name}</h3>
            <ul>
              {
                lists.filter(item => item.parent_id === category.id)
                  .map((item, idx) =>
                    <li key={`${category.name}${idx}`} className={port === item.name.toLowerCase() ? 'active' : ''}>
                      <Link to={`/posts/${item.name.toLowerCase()}`}>{item.name}<small>{item.chineseName}</small></Link>
                    </li>
                  )
              }
            </ul>
          </div>
        )}
      </aside>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
        {
          !config.github ? null :
          <div className="github"><a className="github-link" href={config.github}>Fork me on GitHub</a></div>
        }
      </div>
    );
  }
}

Layout.propTypes = {
  picked: React.PropTypes.object
};

Layout.defaultProps = {
  picked: {}
};


// export default ({ children, asideDate }) => {
//   return (
//     <div>
//       <div className="header">
//         <div className="container">
//           <div className="brand">
//             <Link className="home" to={config.home}>{config.sitename}</Link>
//             {
//               !config.tagline ? null :
//                 <span>- <span className="tagline">{config.tagline}</span></span>
//             }
//           </div>
//           {
//             !config.navigation ? null :
//               <div className="menu" role="navigation">
//                 {
//                   config.navigation.map((item, index) =>
//                     <Link to={item.link} key={index}>{item.title}</Link>
//                   )
//                 }
//               </div>
//           }
//         </div>
//       </div>
//       <div className="document yue">
//         <aside className="site-aside" style={{minWidth: '180px'}}>{asideDate}</aside>
//         <article className="site-content">{children}</article>
//       </div>
//       <div className="footer">
//         {config.footer ? config.footer : null}
//         {
//           config.hideBisheng ? null :
//             <p className="copyright">powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></p>
//         }
//       </div>
//       {
//         !config.github ? null :
//           <div className="github"><a className="github-link" href={config.github}>Fork me on GitHub</a></div>
//       }
//     </div>
//   );
// }
