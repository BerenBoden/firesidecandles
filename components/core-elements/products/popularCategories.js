import React from "react";
import Link from 'next/link'
import Image from 'next/image'

function popularCategories({ id, attributes }) {
  return (
    <div key={id} className="col-lg-4 col-md-6">
      <div
        className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
        data-wow-delay="0.2s"
      >
        <div className="widget-header-2 position-relative mb-30">
          <h5 className="mt-5 mb-30">{attributes.name}</h5>
        </div>
        <div className="post-block-list post-module-1">
          <ul className="list-post">
            {attributes?.category_products.data.map(({ id, attributes }) => (
              <li key={id} className="mb-30 cursor-pointer">
                <Link href={`/shop/${attributes.slug}`}>
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">

                        <Image src={`${process.env.NEXT_PUBLIC_STRAPI_API}${attributes.image_header.data.attributes.formats.large.url}`} width={1000} height={1000} className="object-cover"/>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        {attributes.title}
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">{attributes.createdAt}</span>
                        <span className="post-by has-dot">
                          0 views
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default popularCategories;
