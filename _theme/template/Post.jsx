import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from '../../components/Body';
import Document from '../../components/Document';
import { isObject } from '../../components/utils';

export function collect(nextProps, callback) {
  if (isObject(nextProps.pageData)) {
    const pageData = {};
    const len = Object.keys(nextProps.pageData).length;
    Object.keys(nextProps.pageData).forEach(key =>
      nextProps.pageData[key]().then((post) => {
        pageData[key] = post;
        if (len === Object.keys(pageData).length) {
          callback(null, {
            ...nextProps,
            pageData
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
  })
};

