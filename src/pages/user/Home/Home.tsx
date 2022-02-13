import React from "react";
import SearchBar from "../../../components/Inputs/SearchBar/SearchBar";
import { asideContent, homeTemplate, mainContent } from "./styles";
import Banner  from "../../../components/UserBanner/Banner";
import EventContainer from "../../../components/EventsContainer/EventsContainer"
import EventService from "../../../services/eventServices";
import Event from "../../../components/EventsContainer/IEvnent";

interface HomeState{
    events: Event[]
}

export default class Home extends React.Component<any, HomeState>{
    
    constructor(props: any){
        super(props)
        this.state = {events: []}
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event: any){
        event.preventDefault();
        const content = event.target[0].value;
        if(content) console.log(content)
    }

    componentDidMount(){
        const eventService: EventService = new EventService();
        const allEvents = eventService.getDummyEvents();
        this.setState({events: allEvents}, ()=> console.log(this.state.events));
    }
    
    render(): React.ReactNode {
        return(
            <div className={homeTemplate()}>
                

                <section className={mainContent()}>
                    <SearchBar handler={this.searchHandler}></SearchBar>
                    <Banner></Banner>
                    <EventContainer events={this.state.events}></EventContainer>
                </section>


                <section className={asideContent()}>
                    a
                </section>


            </div>
        )
    }
}