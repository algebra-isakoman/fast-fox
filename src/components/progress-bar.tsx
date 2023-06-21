type ProgressBarProps = {
  progress: number;
  onFinish?: () => void;
};

const ProgressBar = ({ progress, onFinish }: ProgressBarProps) => {
  const handleProgress = (progress: number) => {
    if (progress === 100) {
      onFinish && onFinish();
    }
    if (progress > 100) {
      return "100%";
    } else if (progress < 0) {
      return "0%";
    }
    return `${progress}%`;
  };

  return (
    <div
      className={`progressbar ${
        progress === 100 ? "progressbar--finished" : ""
      }`}
    >
      <div
        className="progressbar__block"
        style={{
          width: handleProgress(progress),
        }}
      ></div>
    </div>
  );
};
export default ProgressBar;
