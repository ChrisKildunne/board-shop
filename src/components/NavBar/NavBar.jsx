import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, cartItemsCount, setUser }) {
  
  function handleLogOut() {
    userService.logOut();
    setUser(null); // This will need to be managed higher up if NavBar is inside CartPage
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
        <Link className="navbar-brand" to="/orders/new">Products Page</Link>
        {user && (
          <>
            <Link className="navbar-brand" to={`/orders/${user._id}`}>Order History</Link>
            <Link className="navbar-brand" to="/orders/cart">
              Your Cart {cartItemsCount > 0 ? `(${cartItemsCount})` : ""}
            </Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Link className="navbar-brand" to="" onClick={handleLogOut}>Log Out</Link>
          </>
        ) : (
          <Link to="/auth">Log In / Sign Up</Link>
        )}
      </div>
    </nav>
  );
}
