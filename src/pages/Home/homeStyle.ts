import { makeStyles } from 'tss-react/mui';

export const useStyle = makeStyles()((theme) => {
  return {
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '2.7rem',
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: '1.5rem',
      },
    },
    imgBox: {
      display: 'flex',
      flexWrap: 'wrap',
      '& img': {
        flex: '1 1 25%',
        width: '100px',
        [theme.breakpoints.down('sm')]: {
          flex: '1 1 50%',
        },
      },
    },
  };
});