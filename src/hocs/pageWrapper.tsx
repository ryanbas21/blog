// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { compose } from "ramda";
// import getMuiTheme from "material-ui/styles/getMuiTheme";
import store from "../store";
import withRedux from "next-redux-wrapper";

// export const createTheme = getMuiTheme({ userAgent: false });

// const muiThemeWrapper = (theme: any) => (
// 	Component: React.ComponentClass<any>
// ) => <Component />;

export default withRedux(store as any);
