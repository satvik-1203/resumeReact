import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import "./styles/app.scss";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";
import WorkDetails from "./pages/WorkDetails";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
