import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import "./styles/app.scss";
import Nav from "./components/Nav";
import { Route, Switch, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import WorkDetails from "./pages/WorkDetails";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <WorkDetails />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
