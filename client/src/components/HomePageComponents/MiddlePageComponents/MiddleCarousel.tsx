import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MiddleCard } from "./MiddleCard";
import { newArrivalProducts } from "../../../types/ArrivalTypes";
import useFetchStoreApi from "../../../util/fetchFakeStoreApi";

export const MiddleCarousel: React.FC = () => {
  const { data } = useFetchStoreApi<newArrivalProducts[]>("products/?limit=5");

  return (
    <div className="middle-carousel m-auto my-9">
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 500, // Delay between slides in ms
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Number of slides per view for screen widths ≥ 640px
          },
          768: {
            slidesPerView: 3, // Number of slides per view for screen widths ≥ 768px
          },
          1024: {
            slidesPerView: 4, // Number of slides per view for screen widths ≥ 1024px
          },
        }}
      >
        {data &&
          data.map((item: newArrivalProducts) => (
            <SwiperSlide key={item.id}>
              <MiddleCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
