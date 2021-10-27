import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./pages/About"
import ContactUs from "./pages/ContactUs";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* renders my nav component */}
      <Nav />
      {/* renders my home component */}
      <Home />
      {/* renders my About page by passing it an exact path via Route Component*/}
      <Route exact path="/about">
        <About />
      </Route>
      {/* renders my ContactUs page by passing it an exact path via Route Component */}
      <Route exact path="/contactus">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;