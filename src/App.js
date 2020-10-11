import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import OurServicesPage from "./pages/ourServices/OurServicesPage";
import { CalculatorsPage } from "./pages/calculators/CalculatorsPage";
import { InfoBottom } from "./components/info-bottom/InfoBottom";
import { Footer } from "./components/footer/Footer";
import {
  AssetFinance,
  Business,
  FirstHome,
  Investing,
  PreApproval,
  Refinancing,
} from "./components/our-services/ServicesInfo";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <ScrollToTop />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/our_services" component={OurServicesPage} />
        <Route
          exact
          path="/our_services/asset-finance"
          component={AssetFinance}
        />
        <Route
          exact
          path="/our_services/business-commercial"
          component={Business}
        />
        <Route exact path="/our_services/first-home" component={FirstHome} />
        <Route exact path="/our_services/investing" component={Investing} />
        <Route
          exact
          path="/our_services/pre-approval"
          component={PreApproval}
        />
        <Route exact path="/our_services/refinancing" component={Refinancing} />
        <Route exact path="/about" component={AboutPage} />
        <Route path="/calculators" component={CalculatorsPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>

      <InfoBottom />
      <Footer />
    </div>
  );
}

export default App;
