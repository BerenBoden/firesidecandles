import Link from "next/link";
import Image from "next/image";

function card({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;
  console.log(image_header);
  return (
    <div key={id} className="col-md-6">
      <Link href={`/articles/${attributes?.slug}`}>
        <div className="border h-128 p-2 cursor-pointer">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image_header}`}
            height={1000}
            width={1000}
            className="h-3/4 border object-cover"
          />
          <div className="h-1/4 flex my-2 flex-col">
            <div className="flex flex-col my-2 h-1/2">
              <h5 className="capitalize text-lg font-thin h-1/2">
                {attributes.title}
              </h5>
              <p>{attributes.description}</p>
            </div>
            <div className="flex justify-center my-2 items-center h-1/2">
              <button className="border-r uppercase text-xs w-full h-8">
                Add to cart
              </button>
              <button className="uppercase font-thin text-xs w-full h-8">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default card;
