import { NewArrival } from "../../../types/ArrivalTypes";
interface MiddleCardProps {
  item: NewArrival;
}

export const MiddleCard: React.FC<MiddleCardProps> = ({ item }) => {
  return <section>{item.productName}</section>;
};
