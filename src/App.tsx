import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Contact from "./features/contact/contact";
import Home from "./features/home/home";
import NoMatch from "./features/no-match/no-match";
import ProgressBarPage from "./features/progress-bar-page/progress-bar-page";
import "./styles/styles.scss";
import LoaderPage from "./features/loader/loader-page";
import SelectPage from "./features/select/select-page";
import Animals from "./features/animals/animals";
import AnimalCreate from "./features/animals/animal-create";
import AnimalEdit from "./features/animals/animal-edit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progress-bar" element={<ProgressBarPage />} />
          <Route path="loader" element={<LoaderPage />} />
          <Route path="select" element={<SelectPage />} />

          <Route path="animals" element={<Animals />} />
          <Route path="animals/new" element={<AnimalCreate />} />
          <Route path="animals/:animalId" element={<AnimalEdit />} />
          {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
