import React from "react";
import { Link } from "react-router-dom";
import Event from "../EventsContainer/IEvnent";
import RedirectButton from "../Login/RedirectButton";
import { redirectContainer } from "../Login/RedirectStyle";
import { accountLink, buyButton, cartMenuStyle, cartTitle } from "./CartStyle";

interface CartState {
    myEvents: Event[]
}

export default class CartMenu extends React.Component<any, CartState>{

    constructor(props: any) {
        super(props)
        this.state = { myEvents: [] }
    }

    render(): React.ReactNode {
        return (
            <nav className={cartMenuStyle()}>
                <section>
                    <Link className={accountLink()} to={"profile"}> Minha conta </Link>
                    <h2 className={cartTitle()}>Meu carrinho</h2>
                    <h5> Seu carrinho está vazio, adicione itens ao carrinho e eles aparecerão aqui </h5>
                    <section className={redirectContainer()}>
                        <RedirectButton bordered="" linkToRedirect={'criar-conta'} text={'crie sua conta'}></RedirectButton>
                        <RedirectButton bordered="yes" linkToRedirect={'login'} text={'acessar conta'}></RedirectButton>
                    </section>
                    <Link className={buyButton()} to={"checkout"}> Confirmar compra de ingressos no carrinho </Link>
                </section>
            </nav>
        )
    }
}