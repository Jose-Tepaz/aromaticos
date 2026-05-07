import { useState, useEffect } from "react";
import { Nav, Footer, TweaksPanel } from "./components.jsx";
import Home from "./home.jsx";
import Division from "./division.jsx";
import About from "./about.jsx";
import Personalization from "./personalization.jsx";
import Contact from "./contact.jsx";

const App = () => {
  const [page, setPage] = useState(() => {
    try { return localStorage.getItem("aroma_page") || "home"; } catch { return "home"; }
  });
  const [theme, setThemeState] = useState("cream");
  const [tweaksOn, setTweaksOn] = useState(false);

  const setTheme = (t) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const go = (p) => {
    setPage(p);
    try { localStorage.setItem("aroma_page", p); } catch {}
    window.scrollTo({ top: 0, behavior: "instant" });
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

  let content = null;
  if (page === "home") content = <Home go={go} />;
  else if (page === "fragancias" || page === "sabores" || page === "materias") content = <Division id={page} go={go} />;
  else if (page === "nosotros") content = <About go={go} />;
  else if (page === "personalizacion") content = <Personalization go={go} />;
  else if (page === "contacto") content = <Contact go={go} />;

  return (
    <>
      <Nav page={page} go={go} />
      <main key={page}>{content}</main>
      <Footer go={go} />
      <TweaksPanel theme={theme} setTheme={setTheme} visible={tweaksOn} />
    </>
  );
};

export default App;
