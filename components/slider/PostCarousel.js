import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { formatDate } from "../../utility/dates";
const PostCarousel = ({ content }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
        <div className="arrow-cover"></div>
        <Slider {...settings} className="slide-fade">
          {content?.slice(0, 4).map(({ id, attributes }) => (
            <div className="position-relative post-thumb">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API}${attributes.image_header.data.attributes.formats.medium.url}`}
                width={1000}
                height={500}
              />
              {/* <Link href={`/blog/${item.id}`}>
                                    <a
                                        className="img-link"
                                    ></a>
                                </Link> */}
              <span className="top-left-icon bg-warning">
                <i className="elegant-icon icon_star_alt"></i>
              </span>
              <div className="post-content-overlay text-black ml-30 mr-30 pb-30">
                <div className="entry-meta meta-0 font-small mb-20">
                  {/* <Link href={`/category/${item.category}`}>
                    <a>
                      <span className="post-cat text-info">
                        {item.category}
                      </span>
                    </a>
                  </Link> */}
                </div>
                <h3 className="post-title font-weight-900 mb-20">
                  {attributes.title}
                </h3>
                <div className="entry-meta meta-1 font-small mt-10 pr-5 pl-5">
                  <span className="post-on">{formatDate(new Date(attributes.createdAt))}</span>
                  <span className="hit-count has-dot">
                    {attributes.views} Views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PostCarousel;
