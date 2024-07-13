import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export const Banner = () => {
  return (
    <div className="m-auto">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {Array.from({ length: 5 }, (_, index) => (
          <SwiperSlide>
            <div className="relative">
              <figure>
                <img
                  className="m-auto"
                  src={`https://picsum.photos/1920/800?random${index}`}
                  alt=""
                />
              </figure>
              <div className="container">
                <div className="absolute bottom-0 top-0 m-auto h-max w-max">
                  <h2 className="text-8xl">Hello number {index}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
