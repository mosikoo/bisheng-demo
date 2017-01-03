import React from 'react';
import Demo from './Demo';

require('./syntax.css');
require('./index.less');
require('./component.less');

export default class Document extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTitle() {
    const { meta } = this.props.descData.index || {};
    if (!meta) {
      return null;
    }

    return (
      <section className="dTitle">
        <h1>{meta.title}</h1>
        <p>{meta.desc}</p>
      </section>
    );
  }

  render() {
    console.log(this.props);
    const { descData, pageData, utils, params } = this.props;
    const { content, description } = descData.index || {};

    return (
      <div className="document">
        <div className="markdown">
          {this.renderTitle()}
          {
            description ? utils.toReactComponent(description) : null
          }
        </div>
        {
          Object.keys(pageData).sort((a, b) =>
            (parseInt(pageData[a].meta.order, 10) || 1000) > (parseInt(pageData[b].meta.order, 10) || 1000)
          ).map((key, index) =>
            <div className="hentry" key={`module-${params.post}-${index}`}>
              <Demo {...pageData[key]} utils={utils} />
            </div>
          )
        }
        <div className="markdown">
          {
            content ? utils.toReactComponent(content) : null
          }
        </div>
      </div>
    );
  }
}


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
