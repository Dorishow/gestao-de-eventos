import React from "react";
import Event from "./IEvnent";

interface EventContainerProps{
    events: Array<any>
}

export default class EventContainer extends React.Component<EventContainerProps, any>{

    componentDidMount(){

    }

    render(): React.ReactNode {
        return(
            <section>Eventos
                {this.props.events.map(
                    (event: any, index: any) => <p key={index}> {event.name} </p>
                )}
            </section>
        )
    }
}