import React from 'react'
import { Typography } from '@mui/material';
import Link from 'next/link';
import links from '@/utils/links';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={links.home}>
          boilerplate
        </Link>{' '}
        {new Date().getFullYear() + ` - ${(new Date().getFullYear() + 1).toString().slice(2,4)}`}
        {'.'}
      </Typography>
    );
  }

export default Copyright