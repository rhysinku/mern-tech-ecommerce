import { Swiper, SwiperSlide } from "swiper/react";
import newArrivalJson from "../../../placeholderJson/newArrival.json";
import "swiper/css";
import { MiddleCard } from "./MiddleCard";
import { NewArrival } from "../../../types/ArrivalTypes";

export const MiddleCarousel: React.FC = () => {
  return (
    <div className="m-auto">
      <Swiper spaceBetween={10} slidesPerView={4}>
        {newArrivalJson.map((item: NewArrival, index: number) => (
          <SwiperSlide key={index}>
            <MiddleCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
