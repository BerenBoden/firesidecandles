import React from "react";
import Link from "next/link";
import Image from "next/image";

function horizontalCard({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;
  console.log(attributes.product_catgories);
  return (
    <Link key={id} href={`/shop/${attributes.slug}`}>
      <article className="hover-up-2 transition-normal wow fadeInUp animated my-4 p-2 shadow-sm">
        <div className="row mb-40 list-style-2">
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
          <div className="col-md-8 align-self-center">
            <div className="post-content">
              <div className="entry-meta meta-0 font-small">
                <a>
                  {attributes.product_categories.data.map(
                    ({ id, attributes }) => {
                      return (
                        <Link
                          key={id}
                          href={`/shop/categories/${attributes.slug}`}
                        >
                          <span className="post-cat text-primary cursor-pointer">
                            {attributes.name}
                          </span>
                        </Link>
                      );
                    }
                  )}
                </a>
              </div>
              <h5 className="post-title font-weight-90">
                {attributes.title}
                <span className="post-format-icon">
                  <i className="elegant-icon icon_star_alt"></i>
                </span>
              </h5>
              <p>{attributes.description}</p>
              <p className="text-xs">{attributes.price}</p>
              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                <span className="post-on">{attributes.createdAt}</span>
                <span className="post-by has-dot">100 views</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default horizontalCard;
