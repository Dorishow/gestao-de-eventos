import Event from "../components/EventsContainer/IEvnent";

const storageToken = 'cart'

export default class CartService{

    getCart(): Array<any>{
        let allEvents = localStorage.getItem(storageToken) || '[]'
        return JSON.parse(allEvents);
    }

    getFromCart(id: number){
        let allEvents = this.getCart()
        return allEvents.filter( ( event: any ) => event.id === id )
    }

    updateItemOnCart(id: number, property: any, newValue: any){
        const allEvents = this.getCart()
        const ElementId = allEvents.indexOf( (element: any) => element.id === id)
        allEvents[ElementId][property] = newValue
        let stringfiedArray = JSON.stringify(allEvents);
        localStorage.setItem(storageToken, stringfiedArray);
    }

    addToCart(event: Event){
        let allEvents = this.getCart();
        let newEventArray = JSON.stringify([...allEvents, event]);
        localStorage.setItem(storageToken, newEventArray);
    }

    deleteFromCart(id: number){
        const allEvents = this.getCart()
        const newArray = allEvents.splice(id, 1)
        let stringfiedArray = JSON.stringify(newArray);
        localStorage.setItem(storageToken, stringfiedArray);
    }
    
}