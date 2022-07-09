import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { GlobalNavBar } from "./components/GlobalNavBar";
import { AuthContext } from "./contexts/AuthContext";
import { FavoritesPage } from "./pages/Favorites";
import { SignInPage } from "./pages/SignIn";
import { SignUpPage } from "./pages/SignUp";
import { UserVehiclesPage } from "./pages/UserVehicles";
import { VehiclesPage } from "./pages/Vehicles";

interface IPrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: IPrivateRouteProps) {
  const { isAuthenticated, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function IsAuthenticatedRoutes({ children }: IPrivateRouteProps) {
  const { isAuthenticated, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }
  return isAuthenticated ? <Navigate to="/" /> : children;
}

export default function routes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GlobalNavBar />}>
            <Route path="/" element={<VehiclesPage />} />
            <Route
              path="/meus-anuncios"
              element={
                <PrivateRoute>
                  <UserVehiclesPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/meus-favoritos"
              element={
                <PrivateRoute>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/login"
            element={
              <IsAuthenticatedRoutes>
                <SignInPage />
              </IsAuthenticatedRoutes>
            }
          />
          <Route
            path="/cadastro"
            element={
              <IsAuthenticatedRoutes>
                <SignUpPage />
              </IsAuthenticatedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
