import { PersonalCTA } from "./components.jsx";
import HeroSection      from "./home/HeroSection.jsx";
import StatsSection     from "./home/StatsSection.jsx";
import EsenciaSection   from "./home/EsenciaSection.jsx";
import DivisionesSection from "./home/DivisionesSection.jsx";
import IndustriasSection from "./home/IndustriasSection.jsx";
import InnovacionSection from "./home/InnovacionSection.jsx";

const Home = ({ go }) => (
  <div className="page">
    <HeroSection go={go} />
    <StatsSection />
    <EsenciaSection go={go} />
    <DivisionesSection go={go} />
    <IndustriasSection />
    <InnovacionSection go={go} />
    <PersonalCTA go={go} />
  </div>
);

export default Home;
