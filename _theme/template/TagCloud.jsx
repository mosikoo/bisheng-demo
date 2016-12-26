import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

function getTags(posts) {
  const tags = {};
  Object.keys(posts).forEach((filename) => {
    const post = posts[filename];
    const postTags = post.meta.tags;
    if (postTags) {
      postTags.forEach((tag) => {
        if (tags[tag]) {
          tags[tag].push(post);
        } else {
          tags[tag] = [post];
        }
      });
    }
  });
  return tags;
}

export default (props) => {
  const toReactComponent = props.utils.toReactComponent;
  const tags = getTags(props.picked.posts);

  return (
    <DocumentTitle title="Tag Cloud | BiSheng Theme One">
      1
    </DocumentTitle>
  );
}
