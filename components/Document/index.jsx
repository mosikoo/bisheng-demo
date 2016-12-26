import React from 'react';
import { Link } from 'react-router';

export default class Document extends React.Component {
  render() {
    const { pageData, utils } = this.props;

    return (
      <div>
        {
          Object.keys(pageData).map((key, index) => {
            const { meta, description, content } = pageData[key];

            return (
              <div className="hentry" key={`module${index}`}>
                <h1 className="entry-title">{meta.title}</h1>
                {
                  !description ? null :
                  <div className="entry-description">{utils.toReactComponent(description)}</div>
                }
                <div className="entry-content">{utils.toReactComponent(content)}</div>

                <div className="entry-meta">
                  <time className="updated">
                    {`${meta.publishDate.slice(0, 10)} `}
                  </time>
                  {
                    !meta.tags ? null :
                    <span>
                      in <span className="entry-tags">
                        {
                          meta.tags.map((tag, index) =>
                            <Link to={`/tags#${tag}`} key={index}>{tag}</Link>
                          )
                        }
                      </span>
                    </span>
                  }
                  {
                    !meta.source ? null :
                    <a className="source sep" href={meta.source}>
                      {meta.source}
                    </a>
                  }
                </div>
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
