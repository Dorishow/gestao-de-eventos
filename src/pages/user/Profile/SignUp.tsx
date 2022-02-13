import React from "react";
import { formContainer, form, submit } from "./formStyle";

export default class SignUp extends React.Component<any, any>{
    render(): React.ReactNode {
        return(
            <form className={form()}>
            <div className={formContainer()}>
                <h1>Criar conta</h1>
                <input required type="text" placeholder="Nome" />
                <input required type="email" placeholder="E-mail" />
                <input required type="text" placeholder="CPF" />
                <input required type="password" placeholder="senha" />
                <input required type="password" placeholder="confirmar senha" />
                <button className={submit()}>Confirmar dados</button>
            </div>
        </form>
        )
    }
}