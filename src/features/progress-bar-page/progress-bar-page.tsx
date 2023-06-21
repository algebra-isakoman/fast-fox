import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import ProgressBar from "../../components/progress-bar";

const ProgressBarPage = () => {
  const [progressValue, setProgressValue] = useState<number>(20);

  const handleProgressValue = (operation: "+" | "-") => {
    if (progressValue >= 0 && progressValue <= 100) {
      if (operation === "+") {
        setProgressValue(progressValue + 5);
      } else {
        setProgressValue(progressValue - 5);
      }
    }
  };
  return (
    <Container>
      <h1>Progress bar</h1>
      <Devider />
      <div className="progresspage__docs">
        <p>ProgressBar komponenta ima 2 moguča propa.</p>
        <ul>
          <li>
            Prvi prop koji je ujedno i obavezan je "progress" on prima
            vrijednosti tipa "number" gdje 0 predstavlja početak i 100 kraj.
          </li>
          <li>
            Drugi prop je "onFinish" callback koji se okida kada nam progress
            bar dođe do krajnje vrijednosti (100%).
          </li>
        </ul>
      </div>
      <ProgressBar
        onFinish={() => console.log("progress is finished")}
        progress={progressValue}
      />

      <div className="progresspage__btns">
        <Button
          disabled={progressValue === 0 && true}
          onClick={() => handleProgressValue("-")}
          text="minus 5%"
        />
        <Button
          disabled={progressValue === 100 && true}
          onClick={() => handleProgressValue("+")}
          text="plus 5%"
        />
      </div>
    </Container>
  );
};

export default ProgressBarPage;
