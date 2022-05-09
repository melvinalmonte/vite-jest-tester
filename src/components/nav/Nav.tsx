import React from "react";

type NavProps = {
  isLoggedIn: boolean;
  onLogIn: () => void;
  onLogOut: () => void;
};

const Nav = ({ isLoggedIn, onLogIn, onLogOut }: NavProps) => {
  return (
    <nav className="menu">
      <div>
        {isLoggedIn ? (
          <button id={"logout"} onClick={onLogOut}>
            Logout
          </button>
        ) : (
          <button id={"login"} onClick={onLogIn}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
