import { AnchorButton } from "../../Buttons/AnchorButton";

export const MainComponent = () => {
  return (
    <main className="my-9 px-2">
      <div className="m-auto flex min-h-[650px] w-full max-w-screen-xl overflow-hidden rounded-2xl">
        <section className="relative isolate flex w-1/2 items-center justify-center text-white">
          <figure className="absolute inset-0 -z-10 m-auto w-full overflow-hidden">
            <img
              className="ml-[50%] h-full w-[initial] translate-x-[-50%]"
              src="https://picsum.photos/id/119/700/800?random=1?blur=5"
              alt=""
            />
          </figure>
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-secondary to-transparent"></div>
          <div className="w-11/12">
            <h1 className="mb-6 text-5xl">Welcome to qP Gadget</h1>
            <p>
              Discover the latest in computers, laptops, and consoles at qP
              Gadget. We offer a wide range of high-quality products from
              trusted brands, ensuring you find the newest models and
              top-performing devices. Shop confidently with our quality
              assurance, competitive pricing, and special offers. Our
              knowledgeable team is here to provide expert support and help you
              elevate your tech experience. Whether you're a gamer, a
              professional, or a tech enthusiast, qP Gadget has the perfect
              device for you.
            </p>
            <div className="mt-7">
              <AnchorButton to={"/"}>Shop Now</AnchorButton>
            </div>
          </div>
        </section>
        <figure className="w-1/2 overflow-hidden">
          <img
            className="ml-[50%] h-full w-[initial] translate-x-[-50%]"
            src="https://picsum.photos/id/1/700/800"
            alt=""
          />
        </figure>
      </div>
    </main>
  );
};
