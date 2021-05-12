import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import NavBar from "./components/navbar";
import homescreen from "./pages/homescreen";
import Categorypage from "./pages/Categorypage";

function Ecom() {
    const setSideToggle = useState(false);
    return(
        
        <Router>
            <NavBar click={() => setSideToggle(true)} />
            <main>
            <Switch>
                <Route exact path='/' component={homescreen}/>
                <Route exact path='/products' component={Categorypage}/>
            </Switch>
            </main>
        </Router>
        
    );
};



export default Ecom;