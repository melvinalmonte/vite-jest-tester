import React from "react";
import { render, screen } from "../../utils/test-utils";
import Nav from "./Nav";


describe("Navbar working test", () => {
  it("Renders Navbar with login button", () => {
    render(<Nav isLoggedIn={false} onLogIn={() => null} onLogOut={() => null}/>)
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  });
  it("Renders Navbar with logout button", () => {
    render(<Nav isLoggedIn={true} onLogIn={() => null} onLogOut={() => null}/>)
    expect(screen.getByText(/Logout/i)).toBeInTheDocument()
  });
});
