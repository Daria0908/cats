import { observer, inject } from "mobx-react";

const ThemeProvider = inject("themeStore")(
  observer(({ themeStore, children }: any) => {
    const { theme } = themeStore;

    const themeClass = theme === "dark" ? "dark-theme" : "light-theme";

    return <div className={themeClass}>{children}</div>;
  })
);

export default ThemeProvider;
