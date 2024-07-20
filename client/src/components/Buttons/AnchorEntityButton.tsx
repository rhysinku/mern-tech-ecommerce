import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

interface AnchorEntityButtonProps {
  to?: string;
}

export const AnchorEntityButton: React.FC<AnchorEntityButtonProps> = ({
  to = "/",
}) => {
  return (
    <div>
      <Link to={to}>
        <span className="relative text-bodyColor transition-transform duration-300 hover:translate-x-10 hover:text-secondary">
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};
