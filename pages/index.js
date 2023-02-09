import SocialItems from "../components/elements/socialItems";
import Popular from "../components/elements/popular";
import SidebarItems from "../components/elements/sidebarItems";
import Author from "../components/elements/author";
import Latest from "../components/elements/latest";
import marked from "marked";

export async function getStaticProps() {
  const res = await fetch(`${process.env.SERVER_API}/page-content/home`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

function index({ data }) {

  return (
    <>
      <main>
        <div className="featured-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <p>hjd</p>
              </div>
              <div className="col-lg-6 text-right d-none d-lg-block">
                <img src="/assets/imgs/authors/featured.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-grey pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Popular title={"Travel Tips"} />
                <Latest />
              </div>
              <div className="col-lg-4">
                <div className="widget-area">
                  <Author />
                  <SidebarItems title={"most popular"} />
                  <SidebarItems title={"most popular"} />
                  <SocialItems title={"instagram"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default index;
