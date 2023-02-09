import post from "../../data/post.json";
import Link from "next/link";

function sidebarItems() {
  return (
    <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Most popular</h5>
      </div>
      <div className="post-block-list post-module-1">
        <ul className="list-post">
          {post.slice(1, 5).map((item, i) => (
            <li className="mb-30 wow fadeInUp animated">
              <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                <div className="post-content media-body">
                  <h6 className="post-title mb-15 text-limit-2-row font-medium">
                    <Link href={`/blog/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                  </h6>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">{item.date}</span>
                    <span className="post-by has-dot">{item.views} views</span>
                  </div>
                </div>
                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                  <Link href={`/blog/${item.id}`}>
                    <a className="color-white">
                      <img src={`/assets/imgs/news/${item.img}`} alt="" />
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default sidebarItems;
