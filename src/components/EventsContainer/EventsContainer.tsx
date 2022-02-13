import React from "react";
import { css } from "@stitches/react";
import EventComponent from "./Event/EventComponent";
import Event from "./IEvnent";

interface EventContainerProps{
    events: Event[]
}

const container = css('section', {
    display: 'grid',
    gap: '20px',
    marginTop: '40px',
    
    '@media (max-width: 1023px)':{

    },
    '@media (min-width: 1024px)':{
        gridTemplateColumns: 'repeat(2, 1fr)',
    }
})

export default class EventContainer extends React.Component<EventContainerProps, any>{

    render(): React.ReactNode {
        return(
            <section className={container()}>
                {this.props.events.map(
                    (event: any, index: any) => 
                    <EventComponent key={index} event={event} />
                )}
            </section>
        )
    }
}