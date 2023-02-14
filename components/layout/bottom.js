import { useData } from "../../hooks/useQueryFunc";
import { getPopularIdentifiers } from "../../utility/api";
import PopularCategories from "../core-elements/products/popularCategories";

const Bottom = () => {
  const { data, isLoading, isError } = useData(
    ["popularProducts"],
    getPopularIdentifiers
  );
  const identifiers = data?.data;
  return (
    <>
      <div className="site-bottom pt-50 pb-50">
        <div className="container">
          <div className="row">
            {identifiers?.data.map(({id, attributes}, index) => {
              return (
                <PopularCategories id={id} attributes={attributes}/>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
