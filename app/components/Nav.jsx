var React = require('react');
var { NavLink } = require('react-router-dom');

var Nav =  ( props ) => {

          return (
                    <div>
                         <NavLink activeClassName="active" activeStyle={{fontWeight:'bold'}} exact to="/"> Page 1 | </NavLink>
                         <NavLink activeClassName="active" activeStyle={{fontWeight:'bold'}}       to="/page2"> Page 2 |</NavLink>
                         <NavLink activeClassName="active" activeStyle={{fontWeight:'bold'}}       to="/page3"> Page 3 </NavLink>
                     </div>

                )
}

module.exports = Nav;
