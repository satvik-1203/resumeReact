import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import "./styles/app.scss";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import OurWork from "./pages/OurWork";

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
        <Route path="/work">
          <OurWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
