import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
export default (theme) => (Component) => (React.createElement("div", null,
    React.createElement(MuiThemeProvider, { muiTheme: theme },
        React.createElement(Component, null))));
