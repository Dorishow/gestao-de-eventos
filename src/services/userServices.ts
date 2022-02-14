import Event from "../components/EventsContainer/IEvnent";

const storageToken = 'purchases'

export default class UserService{

    getPurchase(): Array<any>{
        let allEvents = localStorage.getItem(storageToken) || '[]'
        return JSON.parse(allEvents);
    }

    getFromPurchase(id: number){
        let allEvents = this.getPurchase()
        return allEvents.filter( ( event: any ) => event.id === id )
    }

    addToPurchase(event: Event){
        let allEvents = this.getPurchase();
        let newEventArray = JSON.stringify([...allEvents, event]);
        localStorage.setItem(storageToken, newEventArray);
    }    
}