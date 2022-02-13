import React from "react";
import Event from '../IEvnent'
import { Link } from "react-router-dom";
import {css} from '@stitches/react'

interface EventProps{
    event: Event
}

const eventStyle = css('article', {
    backgroundSize: 'cover',
    height: '260px',
    display: 'grid',
    placeItems: 'end',
    textDecoration: 'none',
    color: '#ffffff',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: 'xx-small',

    '@media (max-width: 1023px)':{
        padding: '20px',
    },
})

export default class EventComponent extends React.Component<EventProps, any>{
    render(): React.ReactNode {
        return(
            <Link to={`event/${this.props.event.id}`} className={eventStyle()} style={{backgroundImage: `url('${this.props.event.image}')`}}>
                {this.props.event.name}
                {this.props.event.date}
                {this.props.event.timeInterval}
                {this.props.event.local}
            </Link>
        )
    }
}