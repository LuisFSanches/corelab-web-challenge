import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../Header";
import { PageContainer } from "./style";

export function GlobalNavBar() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <PageContainer>
      <Header isAuthenticated={isAuthenticated} />
      <Outlet />
    </PageContainer>
  );
}
