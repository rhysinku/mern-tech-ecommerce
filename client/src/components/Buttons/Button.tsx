interface ButtonProps {
  className?: string | null;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className = "btn_primary",
  children,
}) => {
  return <a className={`btn ${className}`}>{children}</a>;
};
