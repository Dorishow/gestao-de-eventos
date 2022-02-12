import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
      mobile: '(max-width: 767px)',
      tablets: '(min-width: 768px)',
      desktop: '(min-width: 1024px)',
    },
  });

export const homeTemplate = css('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    
})

export const mainContent = css('section', {
    '@mobile':{
        gridColumn: '2 / 12'
    },
    '@tablets':{
        gridColumn: '4 / 10'
    },
    '@desktop':{
        gridColumn: '3 / 7'
    }
})

export const asideContent = css('section', {
    backgroundColor: 'green',
    '@mobile':{
        gridColumn: '2 / 12'
    },
    '@tablets':{
        gridColumn: '4 / 10'
    },
    '@desktop':{
        gridColumn: '8 / 11'
    }
})