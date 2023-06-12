import { useState } from "react";
import IconMoney from "./assets/icons/money";
import IconNotification from "./assets/icons/notification";
import Button from "./components/button";
import Container from "./components/container";
import Devider from "./components/devider";
import Input from "./components/input";
import "./styles/styles.scss";

type ValuesType = {
  [key: string]: string;
};

const obj: ValuesType = {
  firstName: "",
  lastName: "",
};

function App() {
  const [inputsValue, setInputsValue] = useState<ValuesType>(obj);
  const [newState, setNewState] = useState<string>("");

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  return (
    <>
      <Container>
        <h1>Hello world</h1>
        <Button text="Click me!" />
        <Button color="red" text="Neki novi button" />
      </Container>
      <Container size="sm">
        <Devider />
        <h1>neki naslov</h1>
        <div>teki text</div>
        <Input
          value={inputsValue.firstName}
          icon={<IconMoney />}
          placeholder="First name"
          onChange={(value: string) => handleInputsValue(value, "firstName")}
        />
        <Input
          value={inputsValue.lastName}
          icon={<IconNotification />}
          placeholder="Last name"
          onChange={(value: string) => handleInputsValue(value, "lastName")}
        />
        <Input
          value={newState}
          onChange={(value: string) => setNewState(value)}
        />
        <button onClick={() => console.log(inputsValue)}>Get values</button>
      </Container>
    </>
  );
}

export default App;
