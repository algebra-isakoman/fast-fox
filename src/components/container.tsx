import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  size?: "md" | "sm";
};

const Container = ({ children, size = "md" }: ContainerProps) => {
  return <div className={`container container--${size}`}>{children}</div>;
};

export default Container;
