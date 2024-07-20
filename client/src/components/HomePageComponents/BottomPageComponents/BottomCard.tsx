import { AnchorEntityButton } from "../../Buttons/AnchorEntityButton";

export default function BottomCard() {
  return (
    <section className="flex w-full max-w-72 flex-col gap-3">
      <figure className="overflow-hidden rounded-md">
        <img src="https://picsum.photos/270/395" alt="" />
      </figure>
      <div className="flex flex-1 items-center justify-between">
        <h2>Laptop</h2>
        <AnchorEntityButton />
      </div>
    </section>
  );
}
