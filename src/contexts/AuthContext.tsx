import { createContext, ReactNode, useEffect, useState } from "react";

import { api } from "../services/api";

interface IAuthContextData {
  isAuthenticated: boolean;
  loading: boolean;
  userData: {
    id: string;
    name: string;
    email: string;
  };
  handleLogin: (email: string, password: string) => Promise<void>;
  handleSignUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  handleSignOut: () => void;
}

interface IAuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
  });

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      const token = `Bearer ${response.data.token}`;
      localStorage.setItem("token", JSON.stringify(token));
      api.defaults.headers.common.authorization = token;

      const user = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      };
      setUserData(user);
      localStorage.setItem("user", JSON.stringify(user));

      setAuthenticated(true);
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      await api.post("/user", {
        name,
        email,
        password,
      });
      const loginResponse = await handleLogin(email, password);
      return loginResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      return err.response.status;
    }
  };

  const handleSignOut = async () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    api.defaults.headers.common.authorization = "";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common.authorization = `${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    const user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        userData,
        handleLogin,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
