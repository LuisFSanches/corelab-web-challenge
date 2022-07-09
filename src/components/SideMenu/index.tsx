import {
  faHouse,
  faBullhorn,
  faUser,
  faHeart,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { CloseModalButton } from "../CloseModalButton";
import { Container, UserContainer, UserInfo } from "./style";

interface ISideMenu {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SideMenu({ isOpen, onRequestClose }: ISideMenu) {
  const { isAuthenticated, handleSignOut, userData } = useContext(AuthContext);

  const handleSignOutandCloseMenu = (onRequestClose: () => void) => {
    handleSignOut();
    onRequestClose();
  };

  // ----Change button icon and actions if user is authenticated
  const userButton = (onRequestClose: () => void) => {
    if (isAuthenticated) {
      return (
        <UserContainer>
          <Link to="/">
            <button
              onClick={() => {
                handleSignOutandCloseMenu(onRequestClose);
              }}
            >
              <span>
                <FontAwesomeIcon icon={faRightFromBracket} /> Sair
              </span>
            </button>
          </Link>

          <UserInfo>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p>{userData.name.split(" ")[0]}</p>
          </UserInfo>
        </UserContainer>
      );
    }
    return (
      <Link to="/login">
        <FontAwesomeIcon icon={faUser} /> Entrar
      </Link>
    );
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-sideMenu"
      appElement={document.getElementById("root") || undefined}
    >
      <CloseModalButton onRequestClose={onRequestClose} isSideMenu />
      <Container>
        <button onClick={() => onRequestClose()}>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} /> Pagina Inicial
          </Link>
        </button>
        <button onClick={() => onRequestClose()}>
          <Link to={`${isAuthenticated ? "/meus-favoritos" : "/login"}`}>
            <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
          </Link>{" "}
        </button>
        <button onClick={() => onRequestClose()}>
          <Link to={`${isAuthenticated ? "/meus-anuncios" : "/login"}`}>
            <FontAwesomeIcon icon={faBullhorn} /> Meus Anúncios
          </Link>
        </button>
        {userButton(onRequestClose)}
      </Container>
    </Modal>
  );
}
