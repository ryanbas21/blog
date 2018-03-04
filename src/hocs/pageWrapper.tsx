import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { compose } from "ramda";

export default (theme: any) => (Component: React.ComponentClass<any>) => (
	<div>
		<MuiThemeProvider muiTheme={theme}>
			<Component />
		</MuiThemeProvider>
	</div>
);
