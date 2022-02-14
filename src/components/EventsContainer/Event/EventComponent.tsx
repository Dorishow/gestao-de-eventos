import React from "react";
import Event from '../IEvnent'
import { Link } from "react-router-dom";
import { css } from '@stitches/react'

interface EventProps {
    event: Event
}

const eventStyle = css('article', {
    backgroundSize: 'cover',
    height: '260px',
    verticalAlign: 'middle',
    textDecoration: 'none',
    color: '#ffffff',
    borderRadius: '10px',
    textAlign: 'center',
    fontSize: 'xx-small',
    border: '1px solid black',

    'h1': {
        paddingTop: '20px',
        fontSize: 'medium',
        fontWeight: 'bold',
        bottom: '0',
        position: 'relative',
    },

    '@media (max-width: 1023px)': {
        padding: '20px',
    },
})

export default class EventComponent extends React.Component<EventProps, any>{
    render(): React.ReactNode {
        return (
            <Link to={`event/${this.props.event.id}`} className={eventStyle()}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('${this.props.event.image}')` }}>
                <article>
                    <h1> {this.props.event.name}  </h1> <br />
                    {this.props.event.date}
                    {this.props.event.timeInterval}
                    {this.props.event.local}
                </article>
            </Link>
        )
    }
}