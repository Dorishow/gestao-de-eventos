import React from "react";
import { formContainer, form, submit } from "./formStyle";

export default class Login extends React.Component<any, any>{
    render(): React.ReactNode {
        return(
            <form className={form()}>
                <div className={formContainer()}>
                    <h1>Login</h1>
                    <input required type="email" placeholder="E-mail" />
                    <input required type="password" placeholder="senha" />
                    <button className={submit()}>Confirmar dados</button>
                </div>
            </form>
        )
    }
}