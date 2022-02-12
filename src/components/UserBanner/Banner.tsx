import React from "react";
import RedirectButton from "../Login/RedirectButton";
import { redirectContainer, redirectStyle } from "../Login/RedirectStyle";
import { BannerStyle, BannerTitle } from "./BannerStyle";

export default class Banner extends React.Component<any, any>{
    render(): React.ReactNode {
        return(
            <article className={BannerStyle()}>
                <h2 className={BannerTitle()}>Compre seus ingressos</h2>
                <h5>
                    Compre seus ingressos para eventos
                    <br/>
                    Tagline da empresa

                    <br />
                </h5>
                <section className={redirectContainer()}>
                    <RedirectButton bordered="" linkToRedirect={'criar-conta'} text={'crie sua conta'}></RedirectButton>
                    <RedirectButton bordered="yes" linkToRedirect={'login'} text={'acessar conta'}></RedirectButton>
                </section>
            </article>
        )
    }
}