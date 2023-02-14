import Link from "next/link";
import Image from "next/image";


function card({ id, attributes }) {
  const image_header =
    attributes.image_header.data.attributes.formats.large.url;

  return (
    <div key={id} className="col-md-6 mb-4">
      <Link href={`/shop/${attributes?.slug}`}>
        <div className="h-128 cursor-pointer">
          <div className="relative h-3/4">
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_API}${image_header}`}
              height={512}
              width={1000}
              className="h-3/4 object-cover"
            />
            <div className="flex justify-center items-end pb-10 text-white my-2 h-1/2 bottom-0 absolute right-0 left-0">
              <button className="border-r uppercase text-xs w-full z-30 h-8">
                Add to cart
              </button>
              <button className="uppercase font-thin text-xs z-30 w-full h-8">
                Add to wishlist
              </button>
              <div
                className="absolute bg-black opacity-75 top-0 z-10 right-0 bottom-15 left-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                  height: "100%",
                }}
              />
            </div>
          </div>
          <div className="h-1/4 flex my-2 flex-col">
            <div className="flex flex-col my-2 h-1/2">
              <h5 className="capitalize text-lg font-thin h-1/2">
                {attributes.title}
              </h5>
              <p className="text-xs">{attributes.reviews || 'no reviews'}</p>
              <p className="text-xs">{attributes.description}</p>
              <p className="text-xs">${attributes.price}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default card;
