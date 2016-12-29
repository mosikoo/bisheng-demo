import React from 'react';
import { Link } from 'react-router';
import Demo from './Demo';
require('./syntax.css');

export default class Document extends React.Component {
  render() {
    const { pageData, utils } = this.props;
console.log(this.props);
    return (
      <div>
        {
          Object.keys(pageData).map((key, index) => {
            const { meta, description, content } = pageData[key];

            return (
              <div className="hentry" key={`module${index}`}>
                <Demo {...pageData[key]} utils={utils} />
              </div>
            );
          })
        }
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
