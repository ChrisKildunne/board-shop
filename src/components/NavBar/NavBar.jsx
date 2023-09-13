import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
import './NavBar.css'

export default function NavBar({ user, setUser }){

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/orders/new">Products Page</Link>
          &nbsp; | &nbsp;
          {user ? (
              <>
              <Link className="navbar-brand" to={`/orders/${user._id}`}>Order History</Link>
              &nbsp; | &nbsp;
              <Link className="navbar-brand" to="/orders/cart">Your Cart</Link>
              &nbsp; | &nbsp;
              <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;<Link className="navbar-brand" to="" onClick={handleLogOut}>Log Out</Link>
            </>
          ) : (
              <Link to="/auth">Log In / Sign Up</Link>
              )}
        </nav>

      );
}      