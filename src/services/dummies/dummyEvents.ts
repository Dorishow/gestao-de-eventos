import { EntityType } from "../../components/EventsContainer/EnumEntities";
import Event from "../../components/EventsContainer/IEvnent";
import thumb1 from "../../assets/thumbnail1.png"
import thumb2 from "../../assets/thumbnail2.png"
import thumb3 from "../../assets/thumbnail3.png"
import thumb4 from "../../assets/thumbnail4.png"

export const dummyEvents: Event[] = [
    {
        id: 0,
        name: 'Primeiro evento',
        image: thumb1,
        local: 'São Paulo - SP',
        availableTickets: 10,
        date: '22/02/2022',
        description: 'Evento 1',
        entityType: EntityType.ENTERPRISE,
        ticketsPrice: 15.25,
        timeInterval: '17h00 - 19h00',
        totalOfTickets: 100
    },
    {
        id: 1,
        name: 'Segundo evento',
        image: thumb2,
        local: 'Salvador - BA',
        availableTickets: 20,
        date: '22/02/2022',
        description: 'Evento de número 2',
        entityType: EntityType.UNIVERSITY,
        ticketsPrice: 15.25,
        timeInterval: '17h00 - 19h00',
        totalOfTickets: 100
    },
    {
        id: 2,
        name: 'Terceiro evento',
        image: thumb3,
        local: 'Ilhéus - BA',
        availableTickets: 20,
        date: '13/07/2022',
        description: 'Evento de número 2',
        entityType: EntityType.UNIVERSITY,
        ticketsPrice: 15.25,
        timeInterval: '17h00 - 19h00',
        totalOfTickets: 100
    },
    {
        id: 3,
        name: 'Quarto evento',
        image: thumb4,
        local: 'Camacã - BA',
        availableTickets: 10,
        date: '27/09/2022',
        description: 'Evento 4(quatro)',
        entityType: EntityType.ENTERPRISE,
        ticketsPrice: 15.25,
        timeInterval: '09h00 - 22h00',
        totalOfTickets: 100
    }
]