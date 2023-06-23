type LoaderProps = {
  isActive: boolean;
  text?: string;
};
const Loader = ({ isActive, text }: LoaderProps) => {
  const renderLoader = () => {
    return <div className="loader__spinner"></div>;
  };
  return (
    <>
      {isActive && (
        <>
          <div className="loader__overlay"></div>
          <div className="loader">{text ? text : renderLoader()}</div>
        </>
      )}
    </>
  );
};
export default Loader;
