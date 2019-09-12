import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import Setup from './Components/Setup'
import Navbar from './Components/Navbar';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name: ""
    };
  }

  changeName = (e)=>{
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
    <Router>
      <div className="container">
        <div className="row">
          <Route path="/" component={Navbar} />
          <Route exact path="/" render={()=><Home changeName={this.changeName} name={this.state.name}/>} />
          <Route exact path="/setup" render={()=><Setup changeName={this.changeName} name={this.state.name}/>} />
        </div>     
      </div>
    </Router>)
  }
}
export default App;