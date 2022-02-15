import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        mobile: '(max-width: 767px)',
        tablets: '(min-width: 768px) and (max-width: 1023px)',
        desktop: '(min-width: 1024px)',
    },
});

export const thanksTemplate = css('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    width: '100vw',
    height: '100vh',
    placeContent: 'center',

})

export const mainContent = css('section', {
    borderTop: '1px solid gainsboro',
    textAlign: 'center',
    '@mobile': {
        gridColumn: '2 / 12'
    },
    '@tablets': {
        gridColumn: '4 / 10'
    },
    '@desktop': {
        gridColumn: '5 / 9'
    },

    'h2':{
        fontFamily: 'roboto condensed',
        fontWeight: 'bold',
        fontSize: 'xx-large',
        paddingTop: '20px',
        paddingBottom: '20px',
    },

    'h5':{
        marginBottom: '150px',
    }
})