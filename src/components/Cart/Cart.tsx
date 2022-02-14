import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import CartService from "../../services/cartServices";
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
        this.updateCartMenu = this.updateCartMenu.bind(this)
    }

    componentDidMount(){
        const cartService: CartService = new CartService()
        const cartItems = cartService.getCart()
        this.setState({myEvents: cartItems})
    }
    
    updateCartMenu(ticketId: number){
        const cartService: CartService = new CartService()
        cartService.deleteFromCart(+ticketId)
        this.context.updateCart(cartService.getCart())
    }

    render(): React.ReactNode {
        const { cart, updateCart } = this.context;
        return (
            <nav className={cartMenuStyle()}>
                <section>
                    <Link className={accountLink()} to={"profile"}> Minha conta </Link>
                    <h2 className={cartTitle()}>Meu carrinho</h2>

                    { 
                        this.context.cart.length === 0 && 
                        <h5> Seu carrinho está vazio, adicione itens ao carrinho e eles aparecerão aqui </h5> 
                    }

                    {
                        this.context.cart.map(
                            (ticket: any, index: any) => 
                            <div key={index}>
                                <p>{ticket.name}</p>
                                <button onClick={() => this.updateCartMenu(ticket.id)}>remover</button>
                            </div>
                        )
                    }

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

CartMenu.contextType = CartContext;