import React from "react";
import CartMenu from "../../../components/Cart/Cart";
import SearchBar from "../../../components/Inputs/SearchBar/SearchBar";
import { asideContent, homeTemplate, mainContent } from "../Home/styles";
import Event from "../../../components/EventsContainer/IEvnent";
import UserService from "../../../services/userServices";
import EventContainer from "../../../components/EventsContainer/EventsContainer";
import { BannerTitle } from "../../../components/UserBanner/BannerStyle";
import { Link } from "react-router-dom";
import { returnLink } from "../Events/DetailsStyle";


interface ProfileState{
    events: Event[]
    visibleEvents: Event[]
}

export default class Profile extends React.Component<any, ProfileState>{

    constructor(props: any){
        super(props)
        this.state = {events: [], visibleEvents: []}
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event: any){
        event.preventDefault();
        const content = event.target[0].value
        const regex = new RegExp(`${content.toUpperCase()}`, 'g');
        const matched = [...this.state.events].filter((event) => 
        event.name.toUpperCase().match(regex) 
        || event.local.toUpperCase().match(regex)
        || event.date.toUpperCase().match(regex))
        this.setState({visibleEvents: matched})
    }

    componentDidMount(){
        const eventService: UserService = new UserService();
        const allEvents = eventService.getPurchase()
        this.setState({events: allEvents, visibleEvents: allEvents});
    }

    render(): React.ReactNode {
        return(
            <main className={homeTemplate()}>
                

                <section className={mainContent()}>
                    <SearchBar handler={this.searchHandler}></SearchBar>
                    <Link className={returnLink()} to={'/'}>home / profile</Link>
                    <h2 className={BannerTitle()}>Meus ingressos</h2>
                    <EventContainer events={this.state.visibleEvents}></EventContainer>
                </section>


                <section className={asideContent()}>
                    <CartMenu></CartMenu>
                </section>


            </main>
        )
    }
}