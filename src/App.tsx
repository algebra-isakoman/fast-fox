import { useState } from "react";
import IconMoney from "./assets/icons/money";
import IconNotification from "./assets/icons/notification";
import Button from "./components/button";
import Container from "./components/container";
import Devider from "./components/devider";
import Input from "./components/input";
import Modal from "./components/modal";
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
  //State koji nam služi za upravljanje modalom (drži state jeli nam je modal otvoren ili zatvoren)
  const [modal, setModal] = useState<boolean>(false);

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
        <Button text="Get values" onClick={() => console.log(inputsValue)} />
        <Button text="Open modal" onClick={() => setModal(true)} />
        <Modal
          onSuccess={() => {
            alert("Success");
            setModal(false);
          }}
          isOpen={modal}
          title="Moj prvi modal"
          //kada unutar komponente pozovemo onClose callback ovdje će nam doći kod i izvršit će se sve što napišemo u tijelo arrow funkcije
          onClose={() => setModal(false)}
        >
          Ovo je neki modal content
        </Modal>
      </Container>
    </>
  );
}

export default App;
