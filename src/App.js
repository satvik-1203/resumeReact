import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import "./styles/app.scss";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
