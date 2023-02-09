import post from "../../data/post.json";
import Link from "next/link";

function latest() {
  return (
    <div className="post-module-3">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Latest posts</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        {post.slice(4, 8).map((item, i) => (
          <article className="hover-up-2 transition-normal wow fadeInUp animated">
            <div className="row mb-40 list-style-2">
              <div className="col-md-4">
                <div className="post-thumb position-relative border-radius-5">
                  <div
                    className="img-hover-slide border-radius-5 position-relative"
                    style={{
                      backgroundImage: `url(assets/imgs/news/${item.img})`,
                    }}
                  >
                    <Link href={`/blog/${item.id}`}>
                      <a className="img-link"></a>
                    </Link>
                  </div>
                  <ul className="social-share">
                    <li>
                      <Link href="/#">
                        <a>
                          <i className="elegant-icon social_share"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a
                          className="fb"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="tw" target="_blank" title="Tweet now">
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a className="pt" target="_blank" title="Pin it">
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 align-self-center">
                <div className="post-content">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <Link href={`/category/${item.category}`}>
                      <a>
                        <span className="post-cat text-primary">
                          {item.category}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <h5 className="post-title font-weight-900 mb-20">
                    <Link href={`/blog/${item.id}`}>
                      <a>{item.title}</a>
                    </Link>
                    <span className="post-format-icon">
                      <i className="elegant-icon icon_star_alt"></i>
                    </span>
                  </h5>
                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                    <span className="post-on">{item.date}</span>
                    <span className="time-reading has-dot">
                      {item.readTime} mins read
                    </span>
                    <span className="post-by has-dot">{item.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default latest;
