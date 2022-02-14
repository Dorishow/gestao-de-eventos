import Event from "../components/EventsContainer/IEvnent";
import { dummyEvents } from "./dummies/dummyEvents";

export default class EventService{

    getAllEvents(){
        let allEvents = localStorage.getItem('events') || '[]'
        return JSON.parse(allEvents);
    }

    getOneEvent(id: number){
        let allEvents = this.getAllEvents()
        return allEvents.filter( ( event: any ) => event.id === id )
    }

    getOneDummyEvent(id: number){
        let allEvents = this.getDummyEvents()
        return allEvents.filter( ( event: any ) => event.id === id )
    }

    getDummyEvents(){
        return dummyEvents;
    }

    addEvent(event: Event){
        let allEvents = this.getAllEvents();
        let newEventArray = JSON.stringify([...allEvents, event]);
        localStorage.setItem('events', newEventArray);
    }
    
}