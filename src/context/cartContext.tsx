import React, { Component } from "react";
import CartService from "../services/cartServices";

const CartContext = React.createContext<any>([]);

export class CartProvider extends Component{

    state = {
        cart: []
    }

    constructor(props: any){
        super(props)
        this.updateCart = this.updateCart.bind(this)
    }
    
    componentDidMount(){
        const cartService: CartService = new CartService()
        const cartItems = cartService.getCart()
        this.setState({cart: cartItems})
    }

    updateCart(newCart: any){
        this.setState({cart: newCart})
    }

    render(){
        const { cart } = this.state;
        const { updateCart } = this
        return <CartContext.Provider value={{cart, updateCart}}> {this.props.children} </CartContext.Provider>
    }
}

export default CartContext;