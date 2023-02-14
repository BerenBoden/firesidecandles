import SidebarItems from "../../components/elements/sidebarItems";
import Featured from "../../components/elements/featured";
import Latest from "../../components/elements/latest";
import { getArticles } from "../../utility/api";
import { useData } from "../../hooks/useQueryFunc";

function index() {
  const { data } = useData(["articles"], getArticles);
  const articles = data?.data.data;
  return (
    <main>
      <Featured
        content={articles}
        title="popular articles"
      />
      <div className={`pt-50 pb-50`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Latest
                content={articles}
                title="featured articles"
              />
            </div>
            <div className="col-lg-6">
              <div className="widget-area">
                <SidebarItems
                  content={articles}
                  title="reccomended articles"
                />
                <SidebarItems
                  content={articles}
                  title="interesting articles"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default index;
