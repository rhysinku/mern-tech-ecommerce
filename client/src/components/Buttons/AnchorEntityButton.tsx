import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
export const AnchorEntityButton: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <span>
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};
