import Container from "../../components/container";
import Devider from "../../components/devider";
import Select from "../../components/select";

export type OptionType = {
  label: string;
  value: string;
};

const selectOptions: OptionType[] = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];

const SelectPage = () => {
  return (
    <Container>
      <h1>Select</h1>
      <Devider />
      <p className="type--san-serif type--lg">
        Select komponenta prima "opitons" prop koji je zapravo lista objekata
        tipa "OptionType". Osim optiona može primiti i placeholder prop koji će
        nam ispisati kao defaultni label unutar dropdowna.
      </p>
      <p className="type--san-serif type--lg">
        Također komponenta prima onChange callback koji nam daje događaj na
        svaku promjenu vrijednosti unutar našeg dropdowna
      </p>
      <Select
        options={selectOptions}
        onChange={(option) => console.log(option)}
      />
    </Container>
  );
};

export default SelectPage;
