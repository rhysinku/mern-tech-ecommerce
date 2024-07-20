import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

interface AnchorEntityButtonProps {
  to?: string;
}

export const AnchorEntityButton: React.FC<AnchorEntityButtonProps> = ({
  to = "/",
}) => {
  return (
    <>
      <Link
        to={to}
        className="relative text-bodyColor transition-transform duration-300 hover:translate-x-2 hover:text-secondary"
      >
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </>
  );
};
