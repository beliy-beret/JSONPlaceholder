import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()((theme) => {
  return {
    profilePage: {
      display: 'grid',
      gridTemplateColumns: '1fr 3fr',
      gridTemplateRows: 'auto auto 1fr',
      gap: '1rem',
    },
    ava: {
      gridColumn: 1,
      gridRow: '1 / 3',
      '& img': {
        width: '100%',
        maxWidth: '300px',
      },
      [theme.breakpoints.down('sm')]: {
        gridRow: 1,
      },
    },
    name: {
      gridColumn: 2,
      gridRow: 1,
      fontSize: '2rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    info: {
      gridColumn: 2,
      gridRow: 2,
      [theme.breakpoints.down('sm')]: {
        gridColumn: '1 / 3',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    posts: {
      gridColumn: '1 / 3',
      gridRow: 3,
    },
  };
});
