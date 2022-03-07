import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()(() => {
  return {
    navbarList: {
      padding: '0.5rem',
    },
    navbarItem: {
      '& a': {
        textDecoration: 'none',
        fontSize: '1rem',
        color: 'grey',
        fontWeight: 'bold',
      },
      '& a.active': {
        textDecoration: 'underline',
      },
    },
  };
});