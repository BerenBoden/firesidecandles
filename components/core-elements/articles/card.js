import Image from "next/image";
import { formatDate } from "../../../utility/dates";

function card({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;
  return (
    <article
      className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
      data-wow-delay="0.2s"
    >
      <div className="post-card-1 border-radius-10 hover-up">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image_header}`}
          width={500}
          height={250}
        />
        <div className="post-content p-30">
          <div className="entry-meta meta-0 font-small mb-10"></div>
          <div className="d-flex post-card-content">
            <h5 className="post-title mb-20 font-weight-900">
              {attributes.title}
            </h5>
            <p className="post-title mb-20 font-weight-900">
              {attributes.content}
            </p>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <span className="post-on">
                {formatDate(new Date(attributes.createdAt))}
              </span>
              <span className="time-reading has-dot">0 Likes</span>
              <span className="time-reading has-dot">0 Comments</span>
              <span className="post-by has-dot">{attributes.views} views</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default card;
