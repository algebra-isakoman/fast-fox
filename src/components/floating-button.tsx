import { ButtonHTMLAttributes } from "react";
import IconPlus from "../assets/icons/plus";
import { useNavigate } from "react-router-dom";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <IconPlus />
    </button>
  );
};
export default FloatingButton;
