import { useEffect, useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import AnimalCard from "./animal-card";
import Loader from "../../components/loader";
import Pagination from "../../components/pagintaion";

export type AnimalType = {
  name: string;
  species: string;
  animalClass: string;
  diet: string;
  habitat: string;
};

//rows per page (limit koliko itema vidimo od jednom)
const rpp = 8;
const noOfItems = 20;
const numerOfPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const getAnimals = () => {
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          setAnimals(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimals();
  }, [page]);

  return (
    <Container>
      <Loader isActive={loading} />
      <h1>Animals</h1>
      <Devider />
      <div>Imamo itema: {animals.length}</div>
      <div className="grid grid--primary type--san-serif">
        {animals.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination
        onPaginate={(activePage) => console.log("active page: ", activePage)}
      />
    </Container>
  );
};

export default Animals;
