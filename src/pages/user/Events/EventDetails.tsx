import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartMenu from "../../../components/Cart/Cart";
import EventService from "../../../services/eventServices";
import { asideContent, homeTemplate, mainContent } from "../Home/styles";
import { useParams } from "react-router-dom";
import Event from "../../../components/EventsContainer/IEvnent";
import { EntityType } from "../../../components/EventsContainer/EnumEntities";

export default function EventDetails( props: any ){

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
        const [thisEvent] = eventService.getOneDummyEvent( parseInt( id.eventId || '0' ))
        setEvent(thisEvent)
      },[id.eventId]);

        return(
            <main className={homeTemplate()}>
                

                <section className={mainContent()}>
                   <Link to={'/'}>home / evento</Link>
                   <h1>{event.name}</h1>
                </section>


                <section className={asideContent()}>
                    <CartMenu></CartMenu>
                </section>


            </main>
        )
    
}