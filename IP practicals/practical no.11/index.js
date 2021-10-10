import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Name from './Name';
import RollNo from './RollNo';
import PRNno from './PRNno';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// command for installation of router = npm install --save react-router-dom
 class Nav extends React.Component {
     render() {
         return (
             <div>
               <Router>
                     <ul>
                         <li><Link to='/'>Name</Link></li>
                         <li><Link to='/Roll No'>Roll No</Link></li>
                         <li> <Link to='/PRN No'>Prn No</Link></li>
                     </ul>
                     <Switch>
                         <Route path='/' exact component={Name} />
                         <Route path='/Roll No' component={RollNo} />
                         <Route path='/PRN No' component={PRNno} />
                     </Switch>
                 </Router>
             </div>
         );
     }
 }
 
 ReactDom.render(<Nav />, document.getElementById("root"));
reportWebVitals();
