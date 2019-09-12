import React from 'react';
import {Link} from 'react-router-dom'
function Navbar(props){
  return(<>
    <ul className="nav">
        <li className="nav-item"><Link to="/" className="nav-link active">Home</Link></li>
        <li className="nav-item"><Link to="/add-income" className="nav-link">Add Income</Link></li>
        <li className="nav-item"><Link to="/add-expense" className="nav-link">Add an Expense</Link></li>
        <li className="nav-item"><Link to="/setup" className="nav-link" tabIndex="-1" aria-disabled="true">Setup Your Account</Link></li>
    </ul>
  </>)
}
export default Navbar;