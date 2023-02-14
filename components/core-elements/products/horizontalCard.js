import React from "react";
import Image from "next/image";

function horizontalCard({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;

  return (
    <article className="cursor-pointer wow fadeInUp animated ">
      <div className="row mb-40 list-style-2 hover-up transition-normal shadow-sm my-4 p-2">
        <div className="col-md-4">
          <div className="">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image_header}`}
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="col-md-8 align-self-center w-full">
          <div className="w-64">
            <h5 className="post-title font-weight-90">
              {attributes.title}
              <span className="post-format-icon">
                <i className="elegant-icon icon_star_alt"></i>
              </span>
            </h5>
            <p>{attributes.description}</p>
            <p className="text-xs">{attributes.price}</p>
            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
              <p className="text-xs">{attributes.reviews || "no reviews"}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default horizontalCard;
