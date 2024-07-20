import { newArrivalProducts } from "../../../types/ArrivalTypes";
interface MiddleCardProps {
  item: newArrivalProducts;
}

export const MiddleCard: React.FC<MiddleCardProps> = ({ item }) => {
  return (
    <section className="mx-auto flex h-full w-full max-w-lg flex-1 flex-col items-center gap-y-2">
      <figure className="my-auto flex h-80 w-full max-w-xs flex-col items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-2/4 object-contain"
        />
      </figure>
      <section className="flex flex-1 items-center justify-center text-center lg:text-left">
        <h2>{item.title}</h2>
      </section>
    </section>
  );
};
