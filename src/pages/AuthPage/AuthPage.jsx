import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react"

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true)
  const handleClick = () => {
    setShowLogin(!showLogin)
  }
  return (
    <main>
      <button className="btn btn-primary btn-lg" onClick={handleClick}>
        {showLogin ? "No Account? Sign Up" : "Already Have an Account? Login"}
      </button>
        {showLogin ? <LoginForm setUser={setUser} handleClick={handleClick} /> : <SignUpForm setUser={setUser} handleClick={handleClick} /> }
    </main>
  );
}
