/*import logo from './logo.svg';*/

import './App.css';
import './components/common/common.css';
import Header from "./components/common/heading/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import InitPage from './components/common/InitPage';
import Footer from "./components/common/footering/Footer";
import ScrollToHashElement from "./components/utilities/ScrollToHashElement";
import ScrollButton from './components/utilities/ScrollButon';




function App() {

  return (
    
    <>
      
      <Router>
      <ScrollToHashElement />
      <Header/>
        <div>
          <Switch>
          <Route exact path='/' component={InitPage} />
          </Switch>             
        </div>
        <ScrollButton />
        <Footer/> 
        
    
      </Router>


    
    </>
  );
}

export default App;