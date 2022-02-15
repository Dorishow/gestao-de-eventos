import React from "react";
import { Link } from "react-router-dom";
import { buyButton } from "../../../components/Cart/CartStyle";
import { mainContent, thanksTemplate } from "./ThanksStyle";

export default class Thanks extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <main className={thanksTemplate()}>


                <section className={mainContent()}>
                    <h2>Obrigado por utilizar nossos serviços</h2>

                    <h5>
                        Agradecemos a preferência
                        <br />
                        Tagline da empresa
                    </h5>

                    <Link className={buyButton()} to={'/'}> voltar para a página inicial</Link>
                </section>


            </main>
        )
    }
}