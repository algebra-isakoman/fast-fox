import { AnimalType } from "./animals";
import imgDiet from "./../../assets/images/diet.png";
import imgClass from "./../../assets/images/animal-class.png";
import imgHabitat from "./../../assets/images/habitat.png";
import Button from "../../components/button";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat, id } = animal;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt="Image of an animal"
        />
        <div>
          <div className="card__title">{name}</div>
          <div className="card__subtitle">{species}</div>
        </div>
      </div>
      <div className="card__row">
        <img src={imgClass} alt="icon of animal class" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgDiet} alt="icon of animal diet" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="icon of animal habitat" />
        <span>{habitat}</span>
      </div>
      <Button text="Delete" color="red" onClick={() => onDelete(id)} />
    </div>
  );
};

export default AnimalCard;
