import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'

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
          <Route exact path="/" component={Home} />
        </div>     
      </div>
    </Router>)
  }
}
export default App;