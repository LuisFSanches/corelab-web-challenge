import {
  faHouse,
  faBullhorn,
  faUser,
  faHeart,
  faBars,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import { AuthContext } from "../../contexts/AuthContext";
import { SideMenu } from "../SideMenu";
import {
  Container,
  LogoContainer,
  MenuButton,
  NavBar,
  UserContainer,
  UserInfo,
} from "./style";

interface IHeader {
  isAuthenticated: boolean;
}

export function Header({ isAuthenticated }: IHeader) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { handleSignOut, userData } = useContext(AuthContext);

  const handleCloseSideMenu = () => {
    setShowSideMenu(false);
  };

  // ----Change button icon and actions if user is authenticated
  const userButton = () => {
    if (isAuthenticated) {
      return (
        <UserContainer>
          <UserInfo>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p>{userData?.name.split(" ")[0]}</p>
          </UserInfo>
          <Link to="/">
            <button onClick={handleSignOut}>
              <FontAwesomeIcon icon={faRightFromBracket} /> Sair
            </button>
          </Link>
        </UserContainer>
      );
    }
    return (
      <Link to="/login">
        <span>
          <FontAwesomeIcon icon={faUser} /> Entrar
        </span>
      </Link>
    );
  };

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
      </LogoContainer>

      <NavBar>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} /> Pagina Inicial
        </Link>
        <Link to={`${isAuthenticated ? "/meus-favoritos" : "/login"}`}>
          <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
        </Link>
        <Link to={`${isAuthenticated ? "/meus-anuncios" : "/login"}`}>
          <FontAwesomeIcon icon={faBullhorn} /> Meus Anúncios
        </Link>
        {userButton()}
      </NavBar>

      <MenuButton onClick={() => setShowSideMenu(true)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>

      <SideMenu isOpen={showSideMenu} onRequestClose={handleCloseSideMenu} />
    </Container>
  );
}
