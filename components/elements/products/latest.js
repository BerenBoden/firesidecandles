import post from "../../../data/post.json";
import HorizontalCard from "../../core-elements/products/horizontalCard";
import { getProducts } from "../../../utility/api";
import { useData } from "../../../hooks/useQueryFunc";

function latest() {
  const { data, isLoading, isError } = useData(["products"], getProducts);
  const posts = data?.data;
  return (
    <div className="post-module-3">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Latest posts</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        {!posts ? (
          <div className="col-md-6">Loading...</div>
        ) : (
          posts.data
            .slice(0, 4)
            .map(({ id, attributes }) => (
              <HorizontalCard id={id} attributes={attributes} />
            ))
        )}
      </div>
    </div>
  );
}

export default latest;
