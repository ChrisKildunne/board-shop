import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){

    function handleLogOut(){
        userService.logOut();

        setUser(null);

    }

    return (
        <nav>
          <Link to="/orders/new">Products Page</Link>
          &nbsp; | &nbsp;
          {user ? (
            <>
              <Link to={`/orders/${user._id}`}>Order History</Link>
              &nbsp; | &nbsp;
              <Link to="/orders/cart">Your Cart</Link>
              &nbsp; | &nbsp;
              <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
            </>
          ) : (
            <Link to="/auth">Log In / Sign Up</Link>
          )}
        </nav>
      );
}      