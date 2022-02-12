import React from "react";
import SearchBar from "../../../components/Inputs/SearchBar/SearchBar";
import { asideContent, homeTemplate, mainContent } from "./styles";

export default class Home extends React.Component<any, any>{
    
    constructor(props: any){
        super(props)
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event: any){
        event.preventDefault();
        const content = event.target[0].value;
        if(content) console.log(content)
        // console.log(event.target[0].value)
    }
    
    render(): React.ReactNode {
        return(
            <div className={homeTemplate()}>
                <section className={mainContent()}>
                    <SearchBar handler={this.searchHandler}></SearchBar>
                </section>
                <section className={asideContent()}>
                    a
                </section>
            </div>
        )
    }
}