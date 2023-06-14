import { ReactNode } from "react";

type InputProps = {
  placeholder?: string;
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const Input = ({
  placeholder = "",
  icon,
  size = "md",
  value,
  onChange,
  disabled = false,
}: InputProps) => {
  return (
    <div className="input__wrapper">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        className={`input input--${size} ${icon && "input--hasIcon"}`}
        type="text"
        disabled={disabled}
      />
      <div className="input__icon">{icon}</div>
    </div>
  );
};
export default Input;
