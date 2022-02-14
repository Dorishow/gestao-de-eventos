import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        mobile: '(max-width: 767px)',
        tablets: '(min-width: 768px) and (max-width: 1023px)',
        desktop: '(min-width: 1024px)',
    },
});

export const cartMenuStyle = css('section', {
    placeItems: 'center',
    display: 'grid',
    'h5':{
        fontSize: 'x-small'  
    },
    '@mobile': {
        visibility: 'hidden',
    },
    '@tablets': {
        visibility: 'hidden',
    },
    '@desktop': {
        position: 'sticky',
        top: 0,
        height: '100vh',
        visibility: 'visible'
    }
})

export const accountLink = css('Link', {
    textDecoration: 'none',
    color: 'Black',
    textAlign: 'center',
    border: '1px solid black',
    display: 'block',
    padding: '10px',
    borderRadius: '5px',
    fontWeight: 'normal',
    fontSize: 'x-small'
})

export const cartTitle = css('h2', {
    fontWeight: 'bold',
    fontSize: 'xx-large',
    fontFamily: 'Roboto Condensed',
    marginBottom: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    textAlign: 'center',
})

export const buyButton = css('Link', {
    textDecoration: 'none',
    color: 'Black',
    backgroundColor: '#f3f3f3',
    textAlign: 'center',
    display: 'block',
    paddingTop: '25px',
    paddingBottom: '25px',
    borderRadius: '5px',
    marginTop: '25px',
    fontWeight: 'normal',
    fontSize: 'xx-small',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
})