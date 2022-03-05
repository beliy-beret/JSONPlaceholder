import React from 'react';
import {Typography} from "@mui/material";

const Preloader: React.FC = () => {
  return(
    <Typography
      component={'h2'}
      variant={'h2'}
      align={'center'}
    >Loading ...
    </Typography>
  )
}

export default Preloader;