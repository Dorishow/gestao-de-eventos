import { css, styled } from '@stitches/react'

export const redirectContainer = css('Link', {
    marginTop: '30px',
    marginBottom: '25px',
    display: 'inline-flex',
    gap: '80px',
    justifyItems: 'space-evenly',
    '@media (max-width: 767px)':{
        flexDirection: 'column',
        gap: '0px'
    }
})

export const redirectStyle = css('button', {
    textDecoration: 'none',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#000000',
    fontWeight: 'normal',
    fontSize: 'x-small',

    '@media (max-width: 1023px)':{
        flexDirection: 'column',
    },

    variants:{
        bordered:{
            yes:{
                border: '1px solid black'
            }
        }
    }
})