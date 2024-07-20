import { NewArrival } from "../../../types/ArrivalTypes";
interface MiddleCardProps {
  item: NewArrival;
}

export const MiddleCard: React.FC<MiddleCardProps> = ({ item }) => {
  return (
    <section>
      <figure>
        <img src={item.imageUrl} alt={item.productName} />
      </figure>
      <section>
        <h2>{item.productName}</h2>
      </section>
    </section>
  );
};
