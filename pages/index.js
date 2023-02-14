import Popular from "../components/elements/popular";
import SidebarItems from "../components/elements/sidebarItems";
import FeaturedImage from "../components/core-elements/featuredImage";
import Latest from "../components/elements/latest";
import { parse } from "marked";
import axios from "axios";
import Image from "next/image";
import { getProducts } from ".././utility/api";
import { useData } from "../hooks/useQueryFunc";

export async function getStaticProps() {
  const { data: content } = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_API}/page-content/home`
  );

  return {
    props: {
      content,
    },
  };
}

function index({ content }) {
  const { featuredImage, featuredContent, heroImage, heroContent } = content;

  const { data: productData } = useData(["products"], getProducts);
  const products = productData?.data.data;

  return (
    <>
      <main>
        <div>
          <div className="container h-128">
            <div className="row">
              <div className="flex items-center text-white h-128">
                <div
                  className="col-lg-6 text-xs z-10"
                  dangerouslySetInnerHTML={{
                    __html: `${parse(
                      heroContent
                    )}<button class="z-10 border-black bg-black py-3 px-5">Shop Now</button>`,
                  }}
                ></div>
              </div>

              <div className="absolute left-0 right-0">
                <div className="flex h-128">
                  <div
                    className=" w-full h-full"
                    style={{ background: "#593529" }}
                  ></div>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API}${heroImage}`}
                    className="opacity-40 absolute object-cover right-0 object-right lg:w-1/2 w-full h-128"
                    height={480}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`pt-50 pb-50`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Popular content={products} title="popular products" />
                <Latest
                  content={products}
                  title="featured products"
                />
              </div>
              <div className="col-lg-6">
                <div className="widget-area">
                  <FeaturedImage
                    image={featuredImage}
                    content={featuredContent}
                  />
                  <SidebarItems
                    content={products}
                    title="reccomended products"
                  />
                  <SidebarItems
                    content={products}
                    title="limited products"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default index;
