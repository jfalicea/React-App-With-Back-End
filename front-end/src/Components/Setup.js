import React from 'react';
import axios from 'axios';

class Setup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      budget: 0
    };
  }
   submitSetup = async (e)=>{
    e.preventDefault();
    console.log("submitSetup", this.state.budget, this.state.name)
    const setUpURL = `${window.apiUrl}/setup`
    //full axios request. 
    const setupResponse = await axios({
      method: "POST",
      data:{  //this is axios specific.... this equal to the res.body 
        name: this.state.name,
        budget: this.state.budget
      },
      url: setUpURL
    });
    setupResponse.data.msg === "added" ?
      this.props.history.push('/') //very similar to doing redirect 
     : this.props.history.push('/error')
  }

  changeName=(e)=>{
    // console.log("Setup.js - changeName",e.target.value)
    this.setState({
      name : e.target.value
    })
  }
  changeBudget=(e)=>{
    // console.log("Setup.js - changeBudget", e.target.value)
    this.setState({
      budget : e.target.value
    })
  }

  render(){
    return(<>
        <div className="col col-sm-12">
            <form onSubmit={this.submitSetup}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.changeName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="total-budget">What is your Budget</label>
                    <input type="number" className="form-control" id="total-budget" value={this.state.budget} onChange={this.changeBudget}  />
                </div>
                <button type="submit" className="btn btn-primary">Submit!</button>
            </form>
        </div>      
    </>)
  }
}
export default Setup;