import PostCarousel from "../../components/slider/PostCarousel";
import Card from "../../components/core-elements/articles/card";

function featured({ content, title }) {
  return (
    <div className="container">
      <div className="hot-tags pt-30 pb-30 font-small align-self-center">
        <div className="widget-header-3">
          <div className="row align-self-center">
            <div className="col-md-4 align-self-center">
              <h5 className="widget-title">{title}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="loop-grid mb-30">
        <div className="row">
          <div className="col-lg-8 mb-30">
            <PostCarousel content={content} />
          </div>
          {content?.slice(0, 4).map(({ id, attributes }) => (
            <Card id={id} attributes={attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default featured;
