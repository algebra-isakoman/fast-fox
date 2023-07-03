import { useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Field from "../../components/field";
import { AnimalType } from "./animals";
import { ValuesType } from "../contact/types";
import Button from "../../components/button";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

type InputsType = {
  id: string;
  label: string;
};

export const dataHeaders = {
  "Content-Type": "application/json",
};

export const initialData: Omit<AnimalType, "id"> = {
  name: "",
  species: "",
  animalClass: "",
  diet: "",
  habitat: "",
};

export const baseInputs: InputsType[] = [
  {
    id: "name",
    label: "Name of an animal",
  },
  {
    id: "species",
    label: "Animal species",
  },
  {
    id: "animalClass",
    label: "Animal class",
  },
  {
    id: "diet",
    label: "What this animal eats",
  },
  {
    id: "habitat",
    label: "Where this animal lives",
  },
];

const AnimalCreate = () => {
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  const onSubmit = (inputsValue: ValuesType) => {
    //Varijabala koja označava jeli se dogodio error
    let getOut = false;
    //String u kojem držimo popis inputa u kojima se dogodio errror
    let errorInputs = "";

    // Optimiziraniji način
    // const keys = Object.keys(inputsValue);
    // for (let i = 0; i < keys.length; i++) {
    //   console.log(inputsValue[keys[i]]);
    //   if (inputsValue[keys[i]] === "") {
    //     getOut = true;
    //     break;
    //   }
    // }

    //Mapiramo sve keyjeve i provjeravamo koji su prazni
    Object.keys(inputsValue).forEach((key) => {
      if (inputsValue[key] === "") {
        getOut = true;
        errorInputs = errorInputs + key + ", ";
      }
    });

    if (getOut) {
      setError(
        "Moraju svi inputi biti popunjeni kako bi se životinja kreirala. Inputi koji se trebaju popuniti su: " +
          errorInputs.substring(0, errorInputs.length - 2)
      );
      return;
    } else {
      setError("");
    }

    const obj = inputsValue;
    obj.id = uuidv4();
    console.log("json: ", JSON.stringify(obj));
    //logika za request
    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: dataHeaders,
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        navigate("/animals");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      {error && <div className="message message--error">{error}</div>}

      <div>
        {baseInputs.map((field) => {
          return (
            <Field
              key={field.id}
              id={field.id}
              value={inputsValue[field.id]}
              label={field.label}
              onChange={(newValue) => handleInputsValue(newValue, field.id)}
            />
          );
        })}
      </div>
      <Button text="Dodaj životinju" onClick={() => onSubmit(inputsValue)} />
    </Container>
  );
};

export default AnimalCreate;
