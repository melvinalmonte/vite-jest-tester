import "./App.css";

import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import { handleLogin, handleLogout } from "./features/login/loginSlice";

import { MyForm } from "./components/forms/MyForm";
import { Nav } from "./components/nav";
import { RootState } from "./store";

type AppProps = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const App = ({ login, logout, isLoggedIn }: AppProps) => {
  return (
    <>
      <Nav isLoggedIn={isLoggedIn} onLogIn={login} onLogOut={logout} />
      <Container>
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab>Basic Form</Tab>
            <Tab>HTTP Request</Tab>
            <Tab>Counter</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MyForm
                onSubmit={(values) =>
                  window.alert(JSON.stringify(values, null, 2))
                }
              />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

function mapStateToProps(state: RootState) {
  const { login } = state;
  return {
    isLoggedIn: login.isLoggedIn,
  };
}

const mapDispatchToProps = {
  login: handleLogin,
  logout: handleLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
