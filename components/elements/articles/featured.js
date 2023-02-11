import PostCarousel from "../../../components/slider/PostCarousel";
import Link from "next/link";
import post from "../../../data/post.json";

function featured() {
  return (
    <div className="container">
      <div className="hot-tags pt-30 pb-30 font-small align-self-center">
        <div className="widget-header-3">
          <div className="row align-self-center">
            <div className="col-md-4 align-self-center">
              <h5 className="widget-title">Featured posts</h5>
            </div>
            <div className="col-md-8 text-md-right font-small align-self-center">
              <p className="d-inline-block mr-5 mb-0">
                <i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>
                Hot tags:
              </p>
              <ul className="list-inline d-inline-block tags">
                <li className="list-inline-item">
                  <a href="#"># Covid-19</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"># Inspiration</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"># Work online</a>
                </li>
                <li className="list-inline-item">
                  <a href="#"># Stay home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="loop-grid mb-30">
        <div className="row">
          <div className="col-lg-8 mb-30">
            <PostCarousel />
          </div>
          {post.slice(1, 5).map((item, i) => (
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
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

export default featured;
