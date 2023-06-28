import { ButtonHTMLAttributes } from "react";
import IconPlus from "../assets/icons/plus";

type FloatingButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

const FloatingButton = ({ ...props }: FloatingButtonProps) => {
  return (
    <button className="btn--floating" {...props}>
      <IconPlus />
    </button>
  );
};
export default FloatingButton;
