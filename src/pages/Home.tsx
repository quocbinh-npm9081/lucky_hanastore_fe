import React, { useState, useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react';

const background = require('./assets/sai-gon-by-night-3914364_1280.jpg');

const Home = () => {
  const now = new Date();

  const newYear = now.getFullYear() + 1;
  const countToDate = new Date(now.getFullYear() + 1, 0, 1).getTime();
  const [days, setDays] = useState<string>('');
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const countdown = () => {
    const now = new Date().getTime();
    const distance = countToDate - now;
    setDays(String(Math.floor(distance / (1000 * 60 * 60 * 24))));
    setHours(String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))));
    setMinutes(String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))));
    setSeconds(String(Math.floor((distance % (1000 * 60)) / 1000)));
  };
  useEffect(() => {
    const countdownInterval = setInterval(countdown, 1000);
    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <Fireworks
      options={{
        hue: {
          min: 0,
          max: 345,
        },
        delay: {
          min: 15,
          max: 15,
        },
        rocketsPoint: {
          min: 0,
          max: 100,
        },
        traceSpeed: 1,
        lineWidth: {
          trace: { min: 0.53, max: 0.53 },
        },
        friction: 0.9,
        autoresize: true,
        opacity: 0.5,
        sound: {
          enabled: true,
          files: [
            'https://fireworks.js.org/sounds/explosion0.mp3',
            'https://fireworks.js.org/sounds/explosion1.mp3',
            'https://fireworks.js.org/sounds/explosion2.mp3',
          ],
          volume: {
            min: 2,
            max: 11,
          },
        },
        mouse: {
          click: true,
          move: false,
          max: 1,
        },
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundPosition: ' bottom left',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${background})`,
      }}
    >
      <div className='content-wrapper'>
        <p className='text-3xl font-bold '>HanaStore Countdown 2023</p>
        <h1 className='year' id='new-year'>
          {newYear}
        </h1>
        <div className='timer'>
          <div className='timer-box'>
            <div className='timer-box__count'>
              <span id='days'>{days}</span>
            </div>
            <div className='timer-box__text'>Ngày</div>
          </div>
          <div className='timer-box'>
            <div className='timer-box__count'>
              <span id='hours'>{hours}</span>
            </div>
            <div className='timer-box__text'>Giờ</div>
          </div>
          <div className='timer-box'>
            <div className='timer-box__count'>
              <span id='minutes'>{minutes}</span>
            </div>
            <div className='timer-box__text'>Phút</div>
          </div>
          <div className='timer-box'>
            <div className='timer-box__count'>
              <span id='seconds'>{seconds}</span>
            </div>
            <div className='timer-box__text'>Giây</div>
          </div>
        </div>
      </div>
    </Fireworks>
  );
};

export default Home;
