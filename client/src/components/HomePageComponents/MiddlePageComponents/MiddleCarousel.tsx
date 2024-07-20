import { Swiper, SwiperSlide } from "swiper/react";
import newArrivalJson from "../../../placeholderJson/newArrival.json";
import "swiper/css";
import { MiddleCard } from "./MiddleCard";
import { NewArrival } from "../../../types/ArrivalTypes";
import useFetchStoreApi from "../../../util/fetchFakeStoreApi";

export const MiddleCarousel: React.FC = () => {
  const { data, loading, error } = useFetchStoreApi("products/?limit=5");

  console.log(data);
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
