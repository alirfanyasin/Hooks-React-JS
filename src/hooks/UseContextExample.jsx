/*
  UseContext
  - Berfungsi untuk komunikasi antara parent dan child component tanpa harus menggunakan props
*/

import { useState, useContext, createContext } from "react";
import Navbar from "../training/Navbar";
import Page from "../training/Page";

export const LoginContext = createContext();

const UseContextExample = () => {
  const [login, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={[login, setLogin]}>
      <div className="-mt-10">
        <Navbar />
        <Page />
      </div>
    </LoginContext.Provider>
  );
};

export default UseContextExample;
