import {makeStyles} from "tss-react/mui";

export const useStyle = makeStyles()(() => {
  return {
    navbarList: {
      display: 'flex',
    },
    navbarItem: {
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        textDecoration: 'none',
        fontSize: '1.5rem',
        color: '#ffffff',
        fontWeight: 'bold',
      },
      '& a.active': {
        textDecoration: 'underline'
      }
    },
  }
});