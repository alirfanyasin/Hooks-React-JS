import { useContext } from "react";
import { LoginContext } from "../hooks/UseContextExample";

const Page = () => {
  const [login, setLogin] = useContext(LoginContext);

  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl">
        {!login ? "You are login" : "You are logout, please login..."}
      </h1>
    </div>
  );
};

export default Page;
