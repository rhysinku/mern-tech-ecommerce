import { AnchorButton } from "../Buttons/AnchorButton";

interface BannerItemProps {
  item: {
    header: string;
    subHeader: string;
    content: string;
  };
}

export const BannerItem: React.FC<BannerItemProps> = ({ item }) => {
  return (
    <>
      <div className="relative">
        <div className="z-1 absolute bottom-0 left-0 right-0 top-0 block bg-gradient-to-r from-white to-transparent"></div>
        <figure>
          <img
            className="m-auto"
            src={`https://picsum.photos/1920/800?random${Math.round(Math.random() * 100)}`}
            alt=""
          />
        </figure>
        <div className="container">
          <div className="absolute bottom-0 top-0 m-auto h-max w-full max-w-3xl">
            <h2 className="text-5xl font-bold">{item.header}</h2>
            <h3 className="mb-3 text-2xl font-bold">{item.subHeader}</h3>
            <p>{item.content}</p>

            <AnchorButton to={`shop`} className={`btn_primary mt-6 py-3`}>
              Shop Now
            </AnchorButton>
          </div>
        </div>
      </div>
    </>
  );
};
