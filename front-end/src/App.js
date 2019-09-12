import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import Setup from './Components/Setup'
import Navbar from './Components/Navbar';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(
    <Router>
      <div className="container">
        <div className="row">
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/setup" component={Setup} />
        </div>     
      </div>
    </Router>)
  }
}
export default App;