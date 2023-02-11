import post from "../../../data/post.json";
import Card from "../../core-elements/products/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function popular({ title }) {
  
  const { data, isLoading, error } = useQuery({
    queryFn: async () =>
      await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/products`),
  });

  const posts = data?.data;

  return (
    <div>
      <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        <div className="row">
          {!posts ? (
            <div className="col-md-6">Loading...</div>
          ) : (
            posts.data.slice(0, 4).map(({id, attributes}) => <Card id={id} attributes={attributes} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default popular;
