import React from 'react';
import { Box } from '@mui/material';

const UserAva = () => {
  return (
    <Box
      sx={{
        '& img': {
          width: '100%',
          maxWidth: '300px',
        },
      }}
    >
      <img
        className="user__ava"
        src="https://avatars.mds.yandex.net/i?id=2a0000017a10350fa41388e643e00b6067d8-4116714-images-thumbs&n=13"
        alt="avatar"
      />
    </Box>
  );
};

export default UserAva;