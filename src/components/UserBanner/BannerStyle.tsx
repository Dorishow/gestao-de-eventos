import { css } from "@stitches/react";
import BannerBg from '../../assets/bg.png'

export const BannerStyle = css('div', {
    marginTop: '40px',
    width: '100%',
    borderRadius: '5px',
    placeItems: 'center',
    backgroundImage: `url('${BannerBg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',  

    '@media (max-width: 1023px)':{
        padding: '0px',
        display: 'block',
    },
    '@media (min-width: 1024px)':{
        paddingTop: '50px',
        paddingBottom: '50px',
        display: 'grid',
    },
})

export const BannerTitle = css('h2', {
    fontWeight: 'bold',
    fontSize: 'xx-large',
    fontFamily: 'Roboto Condensed',
    marginBottom: '20px'
})