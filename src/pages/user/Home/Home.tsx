import React from "react";
import SearchBar from "../../../components/Inputs/SearchBar/SearchBar";
import { asideContent, homeTemplate, mainContent } from "./styles";
import Banner  from "../../../components/UserBanner/Banner";
import EventContainer from "../../../components/EventsContainer/EventsContainer"
import EventService from "../../../services/eventServices";
import Event from "../../../components/EventsContainer/IEvnent";

interface HomeState{
    events: Event[]
    visibleEvents: Event[]
}

export default class Home extends React.Component<any, HomeState>{
    
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
        const eventService: EventService = new EventService();
        const allEvents = eventService.getDummyEvents();
        this.setState({events: allEvents, visibleEvents: allEvents});
    }
    
    render(): React.ReactNode {
        return(
            <div className={homeTemplate()}>
                

                <section className={mainContent()}>
                    <SearchBar handler={this.searchHandler}></SearchBar>
                    <Banner></Banner>
                    <EventContainer events={this.state.visibleEvents}></EventContainer>
                </section>


                <section className={asideContent()}>
                    a
                </section>


            </div>
        )
    }
}