import post from "../../data/post.json";
import Link from "next/link";

function popular({title}) {
  return (
    <div className="post-module-2">
      <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
        <h5 className="mt-5 mb-30">{title}</h5>
      </div>
      <div className="loop-list loop-list-style-1">
        <div className="row">
          {post.slice(4, 8).map((item, i) => (
            <article
              className="col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{
                    backgroundImage: `url(assets/imgs/news/${item.img})`,
                  }}
                >
                  <Link href={`/blog/${item.id}`}>
                    <a className="img-link"></a>
                  </Link>
                  <span className="top-right-icon bg-success">
                    <i className="elegant-icon icon_camera_alt"></i>
                  </span>
                  <ul className="social-share">
                    <li>
                      <Link href="#">
                        <a>
                          <i className="elegant-icon social_share"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
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
                      <Link href="#">
                        <a className="tw" target="_blank" title="Tweet now">
                          <i className="elegant-icon social_twitter"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="pt" target="_blank" title="Pin it">
                          <i className="elegant-icon social_pinterest"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <Link href={`/category/${item.category}`}>
                      <a>
                        <span className="post-cat text-info">
                          {item.category}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <Link href={`/blog/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h5>

                    <div className="post-excerpt mb-25 font-small text-muted">
                      <p>{item.desc}</p>
                    </div>
                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                      <span className="post-on">{item.date}</span>
                      <span className="time-reading has-dot">
                        {item.readTime} mins read
                      </span>
                      <span className="post-by has-dot">
                        {item.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default popular;
