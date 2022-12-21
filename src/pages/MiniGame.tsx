import React, { useState } from 'react';
import Roulette from '../components/Roulette';

const MiniGame = () => {
  const [inputList, setInputList] = useState([
    {
      id: '1',
      text: 'Где туалет?',
    },
    {
      id: '2',
      text: 'Можно вкусную жижу',
    },
    {
      id: '3',
      text: 'А стики есть?',
    },
    {
      id: '4',
      text: 'Испаритель на вейп',
    },
    {
      id: '5',
      text: 'Батарейки есть?',
    },
    {
      id: '6',
      text: 'А где банкомат?',
    },
  ]);

  return (
    <div className='bg'>
      {' '}
      <div className='wrapper typo' id='wrapper'>
        <section id='luckywheel' className='hc-luckywheel'>
          <div className='hc-luckywheel-container'>
            <canvas className='hc-luckywheel-canvas' width='500px' height='500px'>
              Vòng Xoay May Mắn
            </canvas>
          </div>
          <Roulette data={inputList} />
        </section>
      </div>
    </div>
  );
};

export default MiniGame;
