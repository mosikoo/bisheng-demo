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
