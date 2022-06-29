import { Button, Flex, Spacer } from "@chakra-ui/react";

import { memo } from "react";

type NavProps = {
  isLoggedIn: boolean;
  onLogIn: () => void;
  onLogOut: () => void;
};

const Nav = ({ isLoggedIn, onLogIn, onLogOut }: NavProps) => {
  return (
    <Flex as="nav" p={4}>
      <Spacer />
      {isLoggedIn ? (
        <Button onClick={onLogOut}>Logout</Button>
      ) : (
        <Button onClick={onLogIn}>Login</Button>
      )}
    </Flex>
  );
};

export default memo(Nav);
