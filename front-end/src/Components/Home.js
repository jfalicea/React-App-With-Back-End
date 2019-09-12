import React from 'react';
import axios from 'axios'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      submitName: false
    };
  }
  async componentDidMount(){
  }
   getAccount = async ()=>{
    const getAccountsURL = `${window.apiUrl}/get-accounts`
    const accountInfo = await axios.post(getAccountsURL,{name:this.props.name});
    console.log(accountInfo)
  }
  submitNameHandler = ()=> {
    this.setState({
      submitName:true
    },this.getAccount)
  }
  render(){
    //if were unsure of who the user is, ask.... 
    if(!this.state.submitName){
      const form = <div className="container"><form onSubmit={this.submitNameHandler}>
          <div className="form-group">
              <label htmlFor="name">What is your name?</label>
              <input type="text" className="form-control" id="name" value={this.props.name} onChange={this.props.changeName}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit!</button>
        </form></div>
        return(
          <div>{form}</div>
        )
    }



    return(<>
        <div className="col col-sm-12">
            <div className="total-budget">Total Budget: $2000</div>
            <div className="total-spent">Total Spent: $1000</div>
        </div>      
    </>)
  }
}
export default Home;