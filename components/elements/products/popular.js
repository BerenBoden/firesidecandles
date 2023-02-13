import Card from "../../core-elements/products/card";
import { getProducts } from "../../../utility/api";
import { useData } from "../../../hooks/useQueryFunc";

function popular({ title }) {
  const { data, isLoading, isError } = useData(["products"], getProducts);
  const posts = data?.data;
  return (
    <div>
      <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        <div className="row">
          {posts?.data.slice(0, 4).map(({ id, attributes }) => (
            <Card id={id} attributes={attributes} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default popular;
