import * as React from "react";
import Paper from "material-ui/paper";

interface LoginProps {}
interface LoginState {}

const style = {
	height: 100,
	width: 100,
	margin: 20,
	textAlign: "center",
	display: "inline-block"
};

export default class Login extends React.Component<LoginProps, LoginState> {
	render(): JSX.Element {
		return <Paper style={style}>Login Page</Paper>;
	}
}
