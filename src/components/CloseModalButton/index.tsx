import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CloseButton } from "./style";

interface ICloseButtonProps {
  onRequestClose: () => void;
  isSideMenu: boolean;
}

export function CloseModalButton({
  onRequestClose,
  isSideMenu,
}: ICloseButtonProps) {
  return (
    <CloseButton
      type="button"
      onClick={onRequestClose}
      className="modal-close"
      isSideMenu={isSideMenu}
    >
      <FontAwesomeIcon icon={faXmark} />
    </CloseButton>
  );
}
