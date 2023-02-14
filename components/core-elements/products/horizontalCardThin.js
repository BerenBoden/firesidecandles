import React from "react";
import Image from "next/image";
import Link from "next/link";

function horizontalCardThin({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;
  return (
    <Link key={id} href={`/shop/${attributes.slug}`}>
      <li className="mb-10 wow fadeInUp animated cursor-pointer">
        <div className="d-flex bg-white p-4 hover-up transition-normal shadow-sm">
          <div className="post-content media-body">
            <h6 className="capitalize text-lg">{attributes.title}</h6>
            <div className="w-64">
              <p>{attributes.description}</p>
              <p className="text-xs">{attributes.price}</p>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <p className="text-xs">{attributes.reviews || "no reviews"}</p>
              </div>
            </div>
          </div>
          <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image_header}`}
              height={1000}
              width={1000}
              className="h-full object-cover"
            />
          </div>
        </div>
      </li>
    </Link>
  );
}

export default horizontalCardThin;
