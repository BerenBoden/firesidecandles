import Link from 'next/link';

function socialItems() {
  return (
    <div className="sidebar-widget widget_instagram wow fadeInUp animated">
      <div className="widget-header-1 position-relative mb-30">
        <h5 className="mt-5 mb-30">Instagram</h5>
      </div>
      <div className="instagram-gellay">
        <ul className="insta-feed">
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-3.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-1.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-4.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-2.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-5.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-3.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-3.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-4.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-4.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-5.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a
                href="/assets/imgs/thumbnail-5.jpg"
                className="play-video"
                data-animate="zoomIn"
                data-duration="1.5s"
                data-delay="0.1s"
              >
                <img
                  className="border-radius-5"
                  src="/assets/imgs/news/thumb-6.jpg"
                  alt=""
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default socialItems;
