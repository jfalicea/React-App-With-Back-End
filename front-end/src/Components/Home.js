import React from 'react';


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(<>
        <div className="col col-sm-12">
            <div className="total-budget">Total Budget: $2000</div>
            <div className="total-spent">Total Spent: $1000</div>
            <div className="total-spent">Total Spent: $1000</div>
        </div>      
    </>)
  }
}
export default Home;