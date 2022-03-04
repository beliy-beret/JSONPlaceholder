import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import './home.css';

 const Home = () => {
  return (
    <Container maxWidth={'md'}>
      <Typography variant={'h2'} component={'h2'}>JSON placeholder project</Typography>
      <Typography paragraph component={'p'}>
        React app with Redux state menegment and JSONPlaceholder API.
      </Typography>
      <Box className={'imgBox'}>
        <img
          src="https://static-sl.insales.ru/images/articles/1/6852/375492/react.png"
          alt="react"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=ddbc8d5203f5b9c7c0b4f3117c86bbd2-5501397-images-thumbs&n=13"
          alt="redux"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=2a00000179e8d3b88d586b7b37814abfdb95-3731807-images-thumbs&n=13"
          alt="JSON"
        />
      </Box>
    </Container>
  );
}

export default Home;