import React from "react";
import { Link } from "react-router-dom";
import CartMenu from "../../components/Cart/Cart";
import { returnLink } from "../user/Events/DetailsStyle";
import { asideContent, homeTemplate, mainContent } from "../user/Home/styles";
import CartContext from "../../context/cartContext";
import { cartTitle } from "../../components/Cart/CartStyle";
import Event from "../../components/EventsContainer/IEvnent"
import { ticketGroup } from "./CheckotStyle";

export default class Checkout extends React.Component<any, any>{
    render(): React.ReactNode {
        const { cart, updateCart } = this.context;
        return (
            <main className={homeTemplate()}>

                <section className={mainContent()}>
                    <Link className={returnLink()} to={'/'}>home / checkout</Link>


                    <div >
                        <h2 className={cartTitle()} >Resumo da compra</h2>
                        <article className={ticketGroup()}>
                            {
                                this.context.cart.length === 0 &&
                                <h5> Seu carrinho está vazio, adicione itens ao carrinho e eles aparecerão aqui </h5>
                            }


                            {
                                this.context.cart.map(
                                    (ticket: any, index: any) =>
                                        <div key={index}>
                                            <span >{ticket.name}</span> <span> {ticket.ticketsPrice} </span>
                                            <hr />
                                        </div>
                                )
                            }
                            <div className={ticketGroup()}>
                                <span>Total R$</span> <span>{this.context.cart.reduce(
                                    (total: number, event: Event) => total += event.ticketsPrice,
                                    0
                                )}</span>
                            </div>
                        </article>
                    </div>

                </section>

                <section className={asideContent()}>
                    <CartMenu></CartMenu>
                </section>


            </main>
        )
    }
}

Checkout.contextType = CartContext