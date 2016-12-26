import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

function getTime(date) {
  return (new Date(date)).getTime();
}

export default (props) => {
  const toReactComponent = props.utils.toReactComponent;
  console.log(props);
  const posts = props.picked.posts
          .sort((a, b) => getTime(b.meta.publishDate) - getTime(a.meta.publishDate));

  let year = NaN;
  const entryList = [];
  posts.forEach(({ meta, description }, index) => {
    const publishYear = meta.publishDate.slice(0, 4);
    if (year !== publishYear) {
      year = publishYear;
      entryList.push(
        <a className="item-year" href={`#${publishYear}`} key={publishYear} id={publishYear}>
          {publishYear}
        </a>);
    }

    entryList.push(
      <div className="item" key={index}>
        <h2 className="item-title" id={meta.title}>
          <time>{`${meta.publishDate.slice(0, 10)} `}</time>
          <Link to={`/${meta.filename.replace(/\.md$/i, '')}`}>{meta.title}</Link>
        </h2>
        {
          !description ? null :
          <div className="item-description">
            { toReactComponent(description) }
          </div>
        }
      </div>
    );
  });
  return (
    <div>1</div>
  );
};
