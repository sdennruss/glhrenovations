import React from "react";
import Home from "./components/home/home";
import { Switch, Route } from "react-router-dom";
import VillaProjects from "./components/villaProjects/villaProjects";
import "./App.css";
import ContactUs from "./components/contact/contactUs";
import Header from "./components/header/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="routing-container">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Villa Projects" component={VillaProjects} />
          <Route path="/Contact" component={ContactUs} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
