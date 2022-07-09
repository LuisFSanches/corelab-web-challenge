import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter as Router } from "react-router-dom";

import { Header } from "../../components/Header";

describe("Header Component", () => {
  it("Should render sign out button if user is authenticated", () => {
    const isAuthenticated = true;
    const { getByText } = render(
      <Router>
        <Header isAuthenticated={isAuthenticated} />
      </Router>
    );
    expect(getByText("Sair")).toBeInTheDocument();
  });

  it("Should redirect to login page when my favorites are selected and user is not authenticated", () => {
    const isAuthenticated = false;

    const { getByText } = render(
      <Router>
        <Header isAuthenticated={isAuthenticated} />
      </Router>
    );
    const toMyFavoritesButton = getByText("Meus Favoritos");

    userEvent.click(toMyFavoritesButton);

    expect(toMyFavoritesButton).toHaveAttribute("href", "/login");
  });

  it("Should redirect to login page when my advertisements are selected and user is not authenticated", () => {
    const isAuthenticated = false;

    const { getByText } = render(
      <Router>
        <Header isAuthenticated={isAuthenticated} />
      </Router>
    );
    const toMyAdverisementsButton = getByText("Meus Anúncios");

    userEvent.click(toMyAdverisementsButton);

    expect(toMyAdverisementsButton).toHaveAttribute("href", "/login");
  });
});
