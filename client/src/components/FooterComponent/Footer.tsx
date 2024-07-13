import { FooterMainContent } from "./FooterMainContent";
import { FooterSocialMedia } from "./FooterSocialMedia";
export const Footer = () => {
  return (
    <div className="bg-bodyColor">
      <div className="container">
        <div className="py-8">
          <section>
            <FooterMainContent />
          </section>
          <section className="text-white text-center mt-6">
            <h2 className="mb-4">Follow Me:</h2>
            <ul className="flex gap-2 items-center justify-center">
              <FooterSocialMedia />
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
