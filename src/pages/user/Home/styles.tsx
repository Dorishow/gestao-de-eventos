import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        mobile: '(max-width: 767px)',
        tablets: '(min-width: 768px) and (max-width: 1023px)',
        desktop: '(min-width: 1024px)',
    },
});

export const homeTemplate = css('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',

})

export const mainContent = css('section', {
    '@mobile': {
        gridColumn: '2 / 12'
    },
    '@tablets': {
        gridColumn: '4 / 10'
    },
    '@desktop': {
        gridColumn: '3 / 7'
    }
})

export const asideContent = css('section', {
    placeItems: 'center',
    display: 'grid',

    '@mobile': {
        gridColumn: '2 / 12',
    },
    '@tablets': {
        display: 'none',
    },
    '@desktop': {
        gridColumn: '8 / 11',
        position: 'sticky',
        top: 0,
        height: '100vh',
        visibility: 'visible'
    }
})