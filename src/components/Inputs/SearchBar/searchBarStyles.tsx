import { css } from "@stitches/react";

export const searchForm = css('form', {
    marginTop: '15px',
    display: 'flex',
    flexGrow: 'column'
})

export const searchInput = css ('input', {
    width: '100%',
    padding: '15px',
    border: '1px solid #E7E7E7',
    borderRadius: '5px 0px 0px 5px',
    outline: 'none',
    color: '#474747'
})

export const searchSubmit = css('button', {
    border: 'none',
    backgroundColor: '#DDDDDD',
    borderRadius: '0px 5px 5px 0px',
    width: '60px',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer'
})