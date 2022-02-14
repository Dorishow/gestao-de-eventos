import { css } from "@stitches/react";

export const returnLink = css('Link', {
    fontSize: 'x-small',
    color: 'Black',
    marginTop: '100px',
    display: 'block'
})

export const ThumbnailStyle = css('div', {
    marginTop: '40px',
    width: '100%',
    height: '270px',
    borderRadius: '5px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    verticalAlign: 'bottom',
    position: 'relative',
    'h3': {
        position: 'absolute',
        bottom: 20,
        left: 30,
        color: 'White',
        fontFamily: 'roboto condensed',
        fontSize: 'medium',
        fontWeight: 'bold',
    },  

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

export const detailPanner = css('div', {
    backgroundColor: '#e5e5e5',
    borderRadius: '5px',
    marginTop: '25px',
    padding: '25px',
    paddingTop: '35px',
    paddingBottom: '35px',
    fontSize: 'x-small',
})