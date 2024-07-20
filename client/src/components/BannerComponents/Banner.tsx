import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BannerItem } from "./BannerItem";
export const Banner = () => {
  const bannerItem = [
    {
      header: "Cutting-Edge Technology at Your Fingertips",
      subHeader: "Unleash the Future of Tech with qP Gadget",
      content:
        "Discover the latest in computers, laptops, and gaming consoles. Elevate your tech game with unbeatable prices and unparalleled quality.",
    },

    {
      header: "Power and Performance Redefined",
      subHeader: "Gear Up with qP Gadget",
      content:
        "From high-performance computers to sleek laptops and powerful consoles, find the perfect tech to match your lifestyle. Shop now and experience innovation like never before.",
    },

    {
      header: "Your Ultimate Tech Destination",
      subHeader: "Welcome to qP Gadget",
      content:
        "Explore a curated collection of top-tier tech products. Whether for work or play, our range of computers, laptops, and consoles has you covered.",
    },

    {
      header: "Game On with qP Gadget",
      subHeader: "Elevate Your Gaming Experience",
      content:
        "Step into a world of immersive gaming with our advanced consoles and gaming laptops. At qP Gadget, we bring you closer to the action.",
    },

    {
      header: "Innovation Starts Here",
      subHeader: "Join the Tech Revolution with qP Gadget",
      content:
        "Each of these banners focuses on different aspects of what qP Gadget offers, highlighting innovation, performance, gaming, and overall tech excellence.",
    },
  ];

  return (
    <div className="m-auto">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {bannerItem.map((item, index) => (
          <SwiperSlide key={index}>
            <BannerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
