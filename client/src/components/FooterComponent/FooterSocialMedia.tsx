import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

export const FooterSocialMedia = () => {
  const socialMediaPlatforms = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <BsTwitterX />, link: "https://twitter.com/" },
    { icon: <TbBrandGithubFilled />, link: "https://github.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  ];

  return (
    <>
      {socialMediaPlatforms.map((platform, index) => (
        <li key={index} className="text-3xl">
          <a href={platform.link} target="_blank" rel="noopener noreferrer">
            {platform.icon}
          </a>
        </li>
      ))}
    </>
  );
};
