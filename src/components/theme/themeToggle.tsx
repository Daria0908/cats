import { observer, inject } from "mobx-react";

const ThemeToggle = inject("themeStore")(
  observer(({ themeStore }: any) => {
    const getData = () => {
      themeStore.toggleTheme();
    };

    return <button onClick={getData}>Toggle Theme</button>;
  })
);

export default ThemeToggle;
