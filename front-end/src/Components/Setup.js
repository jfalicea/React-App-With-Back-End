import React from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';


class Setup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(<>
        <div className="col col-sm-12">
            <form onSubmit={this.submitSetup}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label for="total-budget">What is your Budget</label>
                    <input type="number" className="form-control" id="total-budget" />
                </div>
            </form>
        </div>      
    </>)
  }
}
export default Setup;