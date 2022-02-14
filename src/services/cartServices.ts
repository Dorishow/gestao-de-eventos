import Event from "../components/EventsContainer/IEvnent";

const storageToken = 'cart'

export default class CartService{

    constructor(){
        this.getCart = this.getCart.bind(this)
        this.getFromCart = this.getFromCart.bind(this)
        this.updateItemOnCart = this.updateItemOnCart.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.deleteFromCart = this.deleteFromCart.bind(this)
    }

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
        const idToDelete = allEvents.findIndex((element: any) => element.id === id)
        allEvents.splice(idToDelete, 1)
        let stringfiedArray = JSON.stringify(allEvents);
        localStorage.setItem(storageToken, stringfiedArray);
    }
    
}