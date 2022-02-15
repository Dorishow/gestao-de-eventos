import Event from "../components/EventsContainer/IEvnent";
import CartService from "./cartServices";

const storageToken = 'purchases'
const cartToken = 'cart'

export default class UserService{

    getPurchase(): Array<any>{
        let allEvents = localStorage.getItem(storageToken) || '[]'
        return JSON.parse(allEvents);
    }

    getFromPurchase(id: number){
        let allEvents = this.getPurchase()
        return allEvents.filter( ( event: any ) => event.id === id )
    }

    addToPurchase(event: Event[]){
        let allEvents = this.getPurchase();
        let newEventArray = JSON.stringify([...allEvents, ...event]);
        localStorage.setItem(storageToken, newEventArray);
        const cartService = new CartService()
        cartService.clearCart();
    }
}