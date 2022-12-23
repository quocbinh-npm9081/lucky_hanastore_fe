import React, { useState, useEffect } from 'react';
import { Fireworks } from '@fireworks-js/react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const background = require('../assets/sai-gon-by-night-3914364_1280.jpg');
const useStyles = makeStyles({
  contentWrapper: {
    zIndex: '99',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: ' 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 .8rem',
  },
  header: {
    fontSize: '3rem !important',
    fontWeight: '300 !important',
  },

  wellcome: {
    fontSize: '2rem !important',
  },

  year: {
    color: 'white',
    fontSize: '15rem !important',
    fontWeight: '900 !important',
    lineHeight: '1.5 !important',
  },
  timer: {
    textAlign: 'center',
  },
  timerBoxCount: {
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#1c2451',
    margin: '0 auto',
  },

  timerBoxText: {
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#085391',
    padding: '1rem 0',
    fontSize: '1rem',
    fontWeight: '500',
    width: '100%',
    margin: '0 auto',
  },
  bg: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflowY: 'hidden',
  },
});
const Home = () => {
  const classes = useStyles();
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
      <Box className={classes.contentWrapper}>
        <Typography variant='h5' sx={{ color: 'white' }}>
          HanaStore Countdown
        </Typography>
        <Typography variant='h1' sx={{ padding: '3rem 0' }}>
          {newYear}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={3} className={classes.timer}>
            <Box className={classes.timerBoxCount}>
              <Typography sx={{ fontSize: '3rem' }}>{days}</Typography>
            </Box>
            <Box className={classes.timerBoxText}>Ngày</Box>
          </Grid>
          <Grid item xs={3} className={classes.timer}>
            <Box className={classes.timerBoxCount}>
              <Typography sx={{ fontSize: '3rem' }}>{hours}</Typography>
            </Box>
            <Box className={classes.timerBoxText}>Giờ</Box>
          </Grid>
          <Grid item xs={3} className={classes.timer}>
            <Box className={classes.timerBoxCount}>
              <Typography sx={{ fontSize: '3rem' }}>{minutes}</Typography>
            </Box>
            <Box className={classes.timerBoxText}>Phút</Box>
          </Grid>
          <Grid item xs={3} className={classes.timer}>
            <Box className={classes.timerBoxCount}>
              <Typography sx={{ fontSize: '3rem' }}>{seconds}</Typography>
            </Box>
            <Box className={classes.timerBoxText}>Giây</Box>
          </Grid>
        </Grid>
        <Box width='100%' textAlign='center' style={{ marginTop: '2rem' }}>
          <Button size='large' variant='contained'>
            <Link to='/miniGame' style={{ textDecoration: 'none', color: 'white' }}>
              {' '}
              Vòng quay may mắn
            </Link>
          </Button>{' '}
        </Box>
      </Box>
    </Fireworks>
  );
};

export default Home;
