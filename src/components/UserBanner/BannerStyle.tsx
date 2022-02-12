import { css } from "@stitches/react";
import BannerBg from '../../assets/bg.png'

export const BannerStyle = css('div', {
    marginTop: '40px',
    width: '100%',
    borderRadius: '5px',
    display: 'grid',
    placeItems: 'center',
    padding: '50px',
    backgroundImage: `url('${BannerBg}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',  
})

export const BannerTitle = css('h2', {
    fontWeight: 'bold',
    fontSize: 'xx-large',
    fontFamily: 'Roboto Condensed',
    marginBottom: '20px'
})