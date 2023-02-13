import Image from "next/image";
import { parse } from "marked";

function featuredImage({ image, content }) {
  return (
    <div className="w-full wow fadeInUp animated mb-4">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image}`}
        width={1920}
        height={1080}
      />
      <div
        className="absolute right-0 p-4 bottom-0 left-0 bg-black"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          height: "80%",
          top: "20%",
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: `${parse(content)}`,
          }}
          className="absolute bottom-24 text-white"
        ></div>
        <button className="z-10 absolute bottom-10 border-black bg-white text-black py-3 px-5">Shop Now</button>
      </div>
    </div>
  );
}

export default featuredImage;
