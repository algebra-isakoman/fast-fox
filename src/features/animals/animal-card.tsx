import { AnimalType } from "./animals";
import imgDiet from "./../../assets/images/diet.png";
import imgClass from "./../../assets/images/animal-class.png";
import imgHabitat from "./../../assets/images/habitat.png";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import IconDelete from "../../assets/icons/delete";
import IconEdit from "../../assets/icons/edit";

type AnimalCardProps = {
  animal: AnimalType;
  onDelete: (id: string) => void;
};

const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat, id } = animal;
  const navigate = useNavigate();

  return (
    <div className="card card--animal">
      <div className="card__header">
        <div
          className="card__header__img-wrapper"
          onClick={() => navigate(`/animals/${id}`)}
        >
          <img
            className="card__header__img"
            width={"100%"}
            src={`https://source.unsplash.com/random/500x500/?${animal.name.replace(
              " ",
              "-"
            )}`}
            alt="Image of an animal"
          />
          <IconEdit />
        </div>
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
      <div className="card__btn" onClick={() => onDelete(id)}>
        <IconDelete />
        <span>Delete</span>
      </div>
    </div>
  );
};

export default AnimalCard;
