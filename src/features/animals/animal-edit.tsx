import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/container";
import Devider from "../../components/devider";
import { baseInputs, dataHeaders, initialData } from "./animal-create";
import Field from "../../components/field";
import { useEffect, useState } from "react";
import { ValuesType } from "../contact/types";
import Button from "../../components/button";
import Loader from "../../components/loader";

const AnimalEdit = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [inputsValue, setInputsValue] = useState<ValuesType>(initialData);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  let { animalId } = useParams();

  const getAnimal = (animalId: string) => {
    fetch(`http://localhost:3000/animals/${animalId}`)
      .then((res) => {
        if (res.ok) {
          setError("");
          return res.json();
        }
        setError("Nije moguče dohvatiti životinju s id-jem: " + animalId);
        setLoading(false);
      })
      .then((data) => {
        const fetchedData = {
          id: data.id,
          name: data.name,
          species: data.species,
          animalClass: data.animalClass,
          habitat: data.habitat,
          diet: data.diet,
        };
        setInputsValue(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onEdit = (values: ValuesType) => {
    let getOut = false;
    let errorInputs = "";
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

    //logika za request
    fetch(`http://localhost:3000/animals/${animalId}`, {
      method: "PUT",
      headers: dataHeaders,
      body: JSON.stringify(inputsValue),
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

  const handleInputsValue = (value: string, id: string) => {
    const newState: ValuesType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };

  useEffect(() => {
    if (animalId) {
      setError("");
      getAnimal(animalId);
    } else {
      setError("Nije moguče dohvatiti životinju s id-jem: " + animalId);
    }
  }, []);

  return (
    <Container>
      <Loader isActive={loading} />
      <h1>Edit animal</h1>
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
      <Button
        text="Uredi životinju"
        onClick={() => {
          if (animalId) {
            onEdit(inputsValue);
          }
        }}
      />
    </Container>
  );
};

export default AnimalEdit;
