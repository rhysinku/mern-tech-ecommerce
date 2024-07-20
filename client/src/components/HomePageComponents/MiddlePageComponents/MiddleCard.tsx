import { newArrivalProducts } from "../../../types/ArrivalTypes";
interface MiddleCardProps {
  item: newArrivalProducts;
}

export const MiddleCard: React.FC<MiddleCardProps> = ({ item }) => {
  return (
    <section>
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <section>
        <h2>{item.title}</h2>
      </section>
    </section>
  );
};
