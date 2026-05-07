import { PersonalCTA } from "./components.jsx";
import HeroSection      from "./home/HeroSection.jsx";
import StatsSection     from "./home/StatsSection.jsx";
import DivisionesSection from "./home/DivisionesSection.jsx";
import IndustriasSection from "./home/IndustriasSection.jsx";
import EsenciaSection   from "./home/EsenciaSection.jsx";

const Home = ({ go }) => (
  <div className="page">
    <HeroSection go={go} />
    <StatsSection />
    <DivisionesSection go={go} />
    <IndustriasSection />
    <EsenciaSection go={go} />
    <PersonalCTA go={go} />
  </div>
);

export default Home;
