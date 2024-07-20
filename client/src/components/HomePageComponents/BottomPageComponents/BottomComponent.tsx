import { BottomBox } from "./BottomBox";
import { BottomCommercial } from "./BottomCommercial";

export const BottomComponent = () => {
  return (
    <div className="my-8">
      <BottomBox title="PC Peripherals" />
      <BottomBox title="Available Laptop" />
      <BottomCommercial />
    </div>
  );
};
