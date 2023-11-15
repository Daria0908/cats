import { observable, action, makeObservable } from "mobx";

class ThemeStore {
  theme: string = "light";

  constructor() {
    makeObservable(this, {
      theme: observable,
    });
  }

  setTheme(theme: string) {
    this.theme = theme;
  }

  toggleTheme() {
    this.setTheme(this.theme === "light" ? "dark" : "light");
  }
}

const themeStore = new ThemeStore();
export default themeStore;
