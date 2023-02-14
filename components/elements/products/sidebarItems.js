import { useData } from "../../../hooks/useQueryFunc";
import { getProducts } from "../../../utility/api";
import HorizontalCardThin from "../../core-elements/products/horizontalCardThin";

function sidebarItems({ title }) {
  const { data, isLoading, isError } = useData(["products"], getProducts);
  const posts = data?.data;

  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          {posts?.data.slice(0, 4).map(({ id, attributes }) => (
            <HorizontalCardThin id={id} attributes={attributes}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default sidebarItems;
