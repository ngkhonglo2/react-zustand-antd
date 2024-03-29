import { ButtonHTMLAttributes } from "react";

interface CButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const CButton: React.FC<CButtonProps> = ({
  children,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...props}
      style={{
        backgroundColor: disabled ? "gray" : "blue",
        color: "white",
        border: "none",
        padding: "8px 16px",
        borderRadius: "4px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default CButton;
