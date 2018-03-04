import * as React from "react";
import Paper from "material-ui/paper";
const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: "center",
    display: "inline-block"
};
export default class Login extends React.Component {
    render() {
        return React.createElement(Paper, { style: style }, "Login Page");
    }
}
