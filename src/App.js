import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
      <Router>
          <Navbar/>
          <Switch>
              <Route path={"/"} exact component={Home}/>
              <Route path={"/menu"} component={Menu} />
              <Route path={"/gallery"} component={Gallery} />
              <Route path={"/contact"} component={Contact} />
          </Switch>
      </Router>


  );
}

export default App;
