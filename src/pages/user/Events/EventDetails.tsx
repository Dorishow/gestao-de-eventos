import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartMenu from "../../../components/Cart/Cart";
import EventService from "../../../services/eventServices";
import { asideContent, homeTemplate, mainContent } from "../Home/styles";
import { useParams } from "react-router-dom";
import Event from "../../../components/EventsContainer/IEvnent";
import { EntityType } from "../../../components/EventsContainer/EnumEntities";
import { detailPanner, returnLink, ThumbnailStyle } from "./DetailsStyle";
import { buyButton } from "../../../components/Cart/CartStyle";
import CartService from "../../../services/cartServices";
import CartContext, { CartProvider } from "../../../context/cartContext";

const emptyEvent = {
    id: 0, name: '', image: '', local: '',
    availableTickets: 0, date: '', description: '',
    entityType: EntityType.ENTERPRISE,
    ticketsPrice: 0, timeInterval: '',
    totalOfTickets: 100
}

export default function EventDetails() {

    const cartContext = useContext(CartContext);

    let id = useParams()
    const [event, setEvent] = useState<Event>( emptyEvent )
    const [cartEvents, setCartEvent] = useState<Event>( emptyEvent )

    useEffect(() => {
        const eventService: EventService = new EventService()
        const [thisEvent] = eventService.getOneDummyEvent(parseInt(id.eventId || '0'))
        setEvent(thisEvent)
    }, [id.eventId]);

    useEffect(() => {
        const cartService: CartService = new CartService()
        const [thisCart] =cartService.getCart()
        setCartEvent(thisCart)
    }, []);

    const addToCart = () => {
        const cartService: CartService = new CartService()
        cartService.addToCart(event)
        const updatedCart = cartService.getCart()
        cartContext.updateCart(updatedCart)
    }

    return (
        <main className={homeTemplate()}>

            <section className={mainContent()}>
                <Link className={returnLink()} to={'/'}>home / evento</Link>
                <div className={ThumbnailStyle()}
                    style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url("${event.image}")` }}>
                    <h3>{event.name}</h3>
                </div>

                <div className={detailPanner()}>
                    <p>- {event.description}</p>
                    <p>- ingressos disponíveis: {event.availableTickets}/{event.totalOfTickets}</p>
                    <p>- R$: {event.ticketsPrice}</p> <br />

                    <p>- {event.date}</p>
                    <p>- {event.timeInterval}</p><br />

                    <p>- {event.local}</p>
                </div>

                <button onClick={() => addToCart()} className={buyButton()}>Adicionar ao carrinho</button>
            </section>

            <section className={asideContent()}>
                <CartMenu></CartMenu>
            </section>


        </main>
    )

}
