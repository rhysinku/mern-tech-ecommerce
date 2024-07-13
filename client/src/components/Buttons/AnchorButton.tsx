import { Link } from "react-router-dom";
interface AnchorButtonProps {
  className?: string | null;
  children?: React.ReactNode;
  to: string;
}

export const AnchorButton: React.FC<AnchorButtonProps> = ({
  className = "btn_primary",
  children,
  to,
}) => {
  return (
    <Link to={to} className={`btn ${className}`}>
      {children}
    </Link>
  );
};
