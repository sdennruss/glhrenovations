import React from "react";
import Home from "./components/home/home";
import { Switch, Route, Redirect } from "react-router-dom";
import VillaProjects from "./components/villaProjects/villaProjects";
import Footer from "./components/contact/footer";
import "./App.css";
import NavBar from "./components/header/navbar";
import ContactUs from "./components/contact/contactUs";
import Header from "./components/home/header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="routing-container">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Villa Projects" component={VillaProjects} />
          <Route path="/Contact" component={ContactUs} />
          <Route paht="/" exact component={Home} />
        </Switch>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default App;
