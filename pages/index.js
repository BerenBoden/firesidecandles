import SocialItems from "../components/elements/articles/socialItems";
import Popular from "../components/elements/products/popular";
import SidebarItems from "../components/elements/articles/sidebarItems";
import FeatureImage from "../components/elements/products/featureImage";
import Latest from "../components/elements/articles/latest";
import { parse } from "marked";
import axios from 'axios';
import Image from "next/image";

export async function getStaticProps() {
  const {data} = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_API}/page-content/home`
  );
 
  return {
    props: {
      data,
    },
  };
}

function index({ data }) {
  const hero_image =
    data.data.attributes.hero_image.data.attributes.formats.large.url;
  return (
    <>
      <main>
        <div>
          <div className="container h-128">
            <div className="row">
              <div className="flex items-center text-white h-128">
                <div
                  className="col-lg-6 z-10"
                  dangerouslySetInnerHTML={{
                    __html: `${parse(
                      data.data.attributes.hero_content
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
                    src={`${process.env.NEXT_PUBLIC_STRAPI_API}${hero_image}`}
                    className="opacity-40 absolute object-cover right-0 object-right lg:w-1/2 w-full h-128"
                    height={480}
                    width={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={` pt-50 pb-50`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Popular title={"Popular products"} />
                <Latest />
              </div>
              <div className="col-lg-6">
                <div className="widget-area">
                  <FeatureImage />
                  <SidebarItems title={"reccomended"} />
                  <SidebarItems title={"reccomended"} />
                  <SocialItems title={"instagram"} />
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
