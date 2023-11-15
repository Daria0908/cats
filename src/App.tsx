import React from "react";
import Aside from "./components/aside";
import { Provider } from "mobx-react";
import factStore from "./store/fact";
import ThemeProvider from "./components/theme/theme";
import ThemeToggle from "./components/theme/themeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Provider factStore={factStore}>
        <Aside />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
