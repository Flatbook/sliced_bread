import { createMuiTheme, Theme } from "@material-ui/core";

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {
        customTheme: string  // optional
    }
}

const palette = {
  primary: { main: "#c1989" },
  secondary: { main: "#4a4a48" }
};

export default createMuiTheme({ palette, customTheme: "customTheme"});