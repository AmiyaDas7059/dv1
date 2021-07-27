import Home from './Home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Navbar from './Navbar';
import Footer from './Footer';

import {Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path="/" component={Home} />   
        <Route  exact path="/about" component={About} />
        <Route  exact path="/service" component={Services} />
        <Route  exact path="/contact" component={Contact} />
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
