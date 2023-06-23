import { useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "../../components/loader";

const LoaderPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Container>
      <h1>Loader</h1>
      <Devider />
      <p className="type--san-serif type--lg">
        Loader komponentu kontroliramo kroz "isActive" prop, a izgled loadera
        možemo mjenjati preko "text" propa. Ako u text prop prosljedimo string,
        on će se prikazati kao loader, u slucaju da ne prosljedimo ništa, u
        loader će se učitati defaultni izgled spinnera. Kako bi upalili i
        isprobali spinner, stisni button ispod.
      </p>
      <Loader isActive={loading} />
      <Button onClick={() => handleLoader()} text="Turn on the loader" />
    </Container>
  );
};

export default LoaderPage;
