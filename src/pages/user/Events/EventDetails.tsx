import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartMenu from "../../../components/Cart/Cart";
import EventService from "../../../services/eventServices";
import { asideContent, homeTemplate, mainContent } from "../Home/styles";
import { useParams } from "react-router-dom";
import Event from "../../../components/EventsContainer/IEvnent";
import { EntityType } from "../../../components/EventsContainer/EnumEntities";
import { detailPanner, returnLink, ThumbnailStyle } from "./DetailsStyle";
import { buyButton } from "../../../components/Cart/CartStyle";

export default function EventDetails() {

    let id = useParams()
    const [event, setEvent] = useState<Event>(
        {
            id: 0, name: '', image: '', local: '',
            availableTickets: 0, date: '', description: '',
            entityType: EntityType.ENTERPRISE,
            ticketsPrice: 0, timeInterval: '',
            totalOfTickets: 100
        }
    )

    useEffect(() => {
        const eventService: EventService = new EventService()
        const [thisEvent] = eventService.getOneDummyEvent(parseInt(id.eventId || '0'))
        setEvent(thisEvent)
    }, [id.eventId]);

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

                <button className={buyButton()}>Adicionar ao carrinho</button>
            </section>

            <section className={asideContent()}>
                <CartMenu></CartMenu>
            </section>


        </main>
    )

}