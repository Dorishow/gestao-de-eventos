import Event from "../EventsContainer/IEvnent";

export interface Ticket {
    event: Event,
    amount: number,
    totalPrice: number,
}