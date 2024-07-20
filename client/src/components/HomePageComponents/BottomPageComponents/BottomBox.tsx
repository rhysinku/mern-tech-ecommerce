import BottomCard from "./BottomCard";

interface BottomBoxProps {
  title: string;
}

export const BottomBox: React.FC<BottomBoxProps> = ({ title }) => {
  return (
    <div className="mb-8">
      <section className="mb-7">
        <h1 className="line-fx text-3xl">{title} </h1>
      </section>

      <div className="flex flex-wrap justify-evenly gap-x-2 gap-y-7">
        {Array.from({ length: 8 }, (_, i) => (
          <BottomCard key={i} />
        ))}
      </div>
    </div>
  );
};
