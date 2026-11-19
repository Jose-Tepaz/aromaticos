import { PersonalCTA } from "./components.jsx";
import HeroSection      from "./home/HeroSection.jsx";
import StatsSection     from "./home/StatsSection.jsx";
import EsenciaSection   from "./home/EsenciaSection.jsx";
import DivisionesSection from "./home/DivisionesSection.jsx";
import IndustriasSection from "./home/IndustriasSection.jsx";
import InnovacionSection from "./home/InnovacionSection.jsx";

// La portada queda fija y el resto de la página sube y se superpone sobre ella
const Home = ({ go }) => (
  <div className="page">
    <HeroSection go={go} />
    <div className="page-rest" id="inicio-contenido">
      <StatsSection />
      <DivisionesSection go={go} />
      <EsenciaSection go={go} />
      <IndustriasSection />
      <InnovacionSection go={go} />
      <PersonalCTA go={go} />
    </div>
  </div>
);

export default Home;
