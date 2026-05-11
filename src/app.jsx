import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Nav, Footer, TweaksPanel } from "./components.jsx";
import Home from "./home.jsx";
import Division from "./division.jsx";
import About from "./about.jsx";
import Personalization from "./personalization.jsx";
import Contact from "./contact.jsx";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setThemeState] = useState("cream");
  const [tweaksOn, setTweaksOn] = useState(false);

  const page = location.pathname.replace(/^\//, "") || "home";

  const setTheme = (t) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const go = (p) => {
    navigate(p === "home" ? "/" : `/${p}`);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOn(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOn(false);
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <>
      <Nav page={page} go={go} />
      <main>
        <Routes>
          <Route path="/" element={<Home go={go} />} />
          <Route path="/fragancias" element={<Division id="fragancias" go={go} />} />
          <Route path="/sabores" element={<Division id="sabores" go={go} />} />
          <Route path="/materias" element={<Division id="materias" go={go} />} />
          <Route path="/nosotros" element={<About go={go} />} />
          <Route path="/personalizacion" element={<Personalization go={go} />} />
          <Route path="/contacto" element={<Contact go={go} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer go={go} />
      <TweaksPanel theme={theme} setTheme={setTheme} visible={tweaksOn} />
    </>
  );
};

export default App;
