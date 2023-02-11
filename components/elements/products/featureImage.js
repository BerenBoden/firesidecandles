import Image from "next/image";

function featureImage({ image }) {
  return (
    <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
      <Image src={image} width={500} height={1200} />
    </div>
  );
}

export default featureImage;
