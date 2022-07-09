import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import { Card } from "../../components/Card";

const vehicle = {
  _id: "1",
  name: "Fusca",
  brand: "Volkswagen",
  price: 3500,
  color: "Preto",
  productionYear: 1980,
  plate: "LPA123",
  description: "",
  userId: "1",
  createdAt: new Date(),
};

const userData = {
  id: "1",
  name: "Luis",
  email: "luis@gmail.com",
};

describe("Card Component", () => {
  it("Should have edit and delete button when user is authenticated", () => {
    const isAuthenticated = true;

    const { getByTestId } = render(
      <Router>
        <Card
          vehicle={vehicle}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
      </Router>
    );
    expect(getByTestId("edit-button")).toBeInTheDocument();
    expect(getByTestId("delete-button")).toBeInTheDocument();
  });

  it("Should not have edit and delete button when user is authenticated", () => {
    const isAuthenticated = false;

    const { queryByTestId } = render(
      <Router>
        <Card
          vehicle={vehicle}
          isAuthenticated={isAuthenticated}
          userData={userData}
        />
      </Router>
    );
    expect(queryByTestId("edit-button")).not.toBeInTheDocument();
    expect(queryByTestId("delete-button")).not.toBeInTheDocument();
  });
});
