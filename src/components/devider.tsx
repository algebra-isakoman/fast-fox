type DeviderProps = {
  marginTop?: "sm" | "md" | "lg";
  marginBottom?: "sm" | "md" | "lg";
};

const Devider = ({ marginTop = "md", marginBottom = "md" }: DeviderProps) => {
  return (
    <div
      className={`devider devider--mb--${marginBottom} devider--mt--${marginTop}`}
    ></div>
  );
};

export default Devider;
