import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import Document from '../../components/Document';
import { isObject } from '../../components/utils';

require('../static/base.less');

export function collect(nextProps, callback) {
  if (isObject(nextProps.pageData)) {
    const pageData = {};
    const descData = {};

    const len = Object.keys(nextProps.pageData).length;
    Object.keys(nextProps.pageData).forEach(key =>
      nextProps.pageData[key]().then((post) => {
        if (key === 'index') {
          descData[key] = post;
        } else {
          pageData[key] = post;
        }
        if (len === (Object.keys(pageData).length + Object.keys(descData).length)) {
          callback(null, {
            ...nextProps,
            pageData,
            descData
          });
        }
      })
    );
  } else {
    callback(null, nextProps);
  }
}

export default class Posts extends React.Component {
  componentWillMount() {
    if (this.props.pageData === undefined) {
      window.location.href = '/notFount';
    }
  }

  render() {
    const { post } = this.props.params;

    return (
      <div>
        <Header />
        <Body route={post}>
          <Document {...this.props} />
        </Body>
        <Footer />
      </div>
    );
  }
}

Posts.propTypes = {
  params: React.PropTypes.shape({
    post: React.PropTypes.string
  }),
  pageData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.undefined
  ])
};

