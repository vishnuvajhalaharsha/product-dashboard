import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Chip } from '@mui/material';
import Tag from '../../tags';

export const SideBar = () => {
  const maindata = useSelector((state) => state.data.items);

  return (
    <Box sx={{ padding: 2 }}>
      {maindata && (
        <>
          <img src={maindata[0]?.image} height={150} width={150} alt="loading..." style={{ display: 'block', margin: '0 auto' }} />
          <Box sx={{ textAlign: 'center', margin: 2 }}>
            <Typography variant="h6">{maindata[0]?.title}</Typography>
            <Typography variant="body2" color="textSecondary">{maindata[0]?.subtitle}</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
            {maindata[0]?.tags.map((tag) => (
              <Tag key={tag} tag={tag} variant="outlined" />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default SideBar;
