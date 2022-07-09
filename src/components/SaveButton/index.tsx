import { Button } from "./style";

interface ISaveButtonProps {
  onClick: () => void;
}

export function SaveButton({ onClick }: ISaveButtonProps) {
  return (
    <Button onClick={onClick} className="modal-close">
      SALVAR
    </Button>
  );
}
