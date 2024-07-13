import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterMainContent } from "./FooterMainContent";
export const Footer = () => {
  return (
    <div className="bg-bodyColor">
      <div className="container">
        <div className="py-8">
          <section>
            <FooterMainContent />
          </section>
          <section className="text-white">
            <h2>Follow Me:</h2>
            <ul className="flex gap-2 items-center justify-center">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <BsTwitterX />
              </li>
              <li>
                <TbBrandGithubFilled />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
