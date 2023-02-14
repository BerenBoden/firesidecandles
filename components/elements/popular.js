import Card from "../core-elements/products/card";

function popular({ content, title }) {
  return (
    <div>
      <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        <div className="row">
          {content?.slice(0, 4).map(({ id, attributes }) => (
            <Card id={id} attributes={attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default popular;
