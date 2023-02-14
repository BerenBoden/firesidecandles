import HorizontalCard from "../core-elements/products/horizontalCard";

function latest({ content, title }) {
  return (
    <div className="post-module-3">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        {content?.slice(0, 4).map(({ id, attributes }) => (
          <HorizontalCard id={id} attributes={attributes} />
        ))}
      </div>
    </div>
  );
}

export default latest;
