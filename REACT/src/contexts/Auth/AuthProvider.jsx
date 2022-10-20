import { useState } from "react";
import { Auth } from ".";
import useHandleAuthLoginFetch from "../../Utils/HandleAuthLoginFetch";

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const responseLogin = useHandleAuthLoginFetch(email, senha);

  if (typeof responseLogin === "object") {
    localStorage.login = JSON.stringify(responseLogin);
  }

  return (
    <Auth.Provider
      value={{
        // responseLogin,
        setEmail,
        setSenha,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export default AuthProvider;
