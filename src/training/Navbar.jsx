import { useContext } from "react";
import { LoginContext } from "../hooks/UseContextExample";

const Navbar = () => {
  const [login, setLogin] = useContext(LoginContext);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <nav className="flex justify-between w-screen h-16 bg-slate-800">
      <button
        className={`w-3/12 text-3xl font-bold ${
          !login ? "bg-red-400" : "bg-green-400"
        }`}
        onClick={() => handleLogin()}
      >
        {!login ? "Logout" : "Login"}
      </button>
      <div className="text-center text-white"></div>
    </nav>
  );
};

export default Navbar;
