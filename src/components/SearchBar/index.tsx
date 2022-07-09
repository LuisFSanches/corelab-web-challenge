import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Input } from "./style";

interface ISearch {
  setValue: (value: string) => void;
}

function SearchBar({ setValue }: ISearch) {
  return (
    <Container>
      <i>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
      <Input
        type="text"
        placeholder="Buscar"
        onChange={(e) => setValue(e.target.value.toLowerCase())}
      />
    </Container>
  );
}

export default SearchBar;
