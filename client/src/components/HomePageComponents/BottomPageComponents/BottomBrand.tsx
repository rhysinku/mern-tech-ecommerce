import {
  SiAlienware,
  SiAsus,
  SiSteelseries,
  SiApple,
  SiRepublicofgamers,
  SiLogitechg,
} from "react-icons/si";
export const BottomBrand = () => {
  return (
    <div className="mx-auto flex w-9/12 items-center justify-evenly gap-4 text-7xl">
      <section>
        <SiAlienware />
      </section>
      <section>
        <SiAsus />
      </section>
      <section>
        <SiSteelseries />
      </section>
      <section>
        <SiApple />
      </section>
      <section>
        <SiRepublicofgamers />
      </section>
      <section>
        <SiLogitechg />
      </section>
    </div>
  );
};
