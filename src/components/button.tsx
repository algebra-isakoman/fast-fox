import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text: string;
  color?: "red" | "green" | "blue";
  //na ovaj način s & možemo extendati naš postoječi tip s nekim drugim
} & ButtonHTMLAttributes<HTMLButtonElement>;

// ...props spreada nam attribude iz ButtonHTMLAttributes<HTMLButtonElement> klase
const Button = ({ text, color = "green", ...props }: ButtonProps) => {
  return (
    //trebamo primjeniti ...props tamo gdje želimo prosljediti atribute iz typa ButtonHTMLAttributes<HTMLButtonElement>
    <button className={`btn btn--${color}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
