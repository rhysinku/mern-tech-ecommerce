import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MiddleCard } from "./MiddleCard";
import { newArrivalProducts } from "../../../types/ArrivalTypes";
import useFetchStoreApi from "../../../util/fetchFakeStoreApi";

export const MiddleCarousel: React.FC = () => {
  const { data } = useFetchStoreApi<newArrivalProducts[]>("products/?limit=5");

  return (
    <div className="m-auto">
      <Swiper spaceBetween={10} slidesPerView={4}>
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
