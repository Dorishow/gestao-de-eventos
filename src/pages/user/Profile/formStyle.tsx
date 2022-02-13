import { css } from "@stitches/react"

export const form = css('form', {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    placeContent: 'center',
})

export const formContainer = css('form', {
    display: 'grid',
    gap: '10px',
    gridColumn: '5 / 9',
    
    'h1':{
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 'xx-large',
        fontFamily: 'roboto condensed',
        borderBottom: '1px solid #c4c4c4',
        paddingBottom: '5px'
    },

    '@media (max-width: 1023px)':{
        gridColumn: '2 / 12'
    },

    'input': {
        backgroundColor: '#c4c4c4',
        color: 'black',
        padding: '20px',
        border: 'none',
        borderRadius: '5px',
        fontFamily: 'roboto condensed',
        outline: 'none',
    },

   '::placeholder': { 
       /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: 'black',
        opacity: 1,
      },
      
      ':-ms-input-placeholder': { 
          /* Internet Explorer 10-11 */
        color: 'black',
      },
      
      '::-ms-input-placeholder': { 
          /* Microsoft Edge */
        color: 'black',
      }

})

export const submit = css('button', {
    border: 'none',
    backgroundColor: '#f3f3f3',
    fontSize: 'xx-small',
    fontWeight: 'normal',
    padding: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
})