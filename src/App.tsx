import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { UserProvider } from "./Context";
import { Router } from "./Router";
import GlobalStyles from "./styles/global";

export function App(): ReactElement {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
}
