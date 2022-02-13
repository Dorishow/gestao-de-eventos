import { EntityType } from "./EnumEntities";

export default interface Event{
    id: number,
    name: String,
    image: String,
    local: String,
    date: String,
    timeInterval: String,
    description: String,
    ticketsPrice: number,
    totalOfTickets: number,
    availableTickets: number,
    entityType: EntityType,
}