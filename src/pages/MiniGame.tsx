import React, { useState } from 'react';
import Roulette from '../components/Roulette';
import Box from '@mui/material/Box';
const bg = require('../assets/background-tet-2023-20.jpg');
const MiniGame = () => {
  const [inputList, setInputList] = useState([
    {
      id: '0xcz',
      text: 'Binh',
    },
    {
      id: '1zxc',
      text: 'An',
    },
    {
      id: '2zxc',
      text: 'Link',
    },
    {
      id: '3zxc',
      text: 'nhi',
    },
    {
      id: 'zxc4',
      text: 'tuan',
    },
    {
      id: 'zxc5',
      text: 'Bay',
    },
  ]);

  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflowY: 'hidden',
      }}
    >
      <Roulette data={inputList} />
    </Box>
  );
};

export default MiniGame;
