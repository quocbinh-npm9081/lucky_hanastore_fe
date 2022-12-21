import React, { useState, useEffect } from 'react';
import { Wheel } from 'react-custom-roulette';

const Roulette: React.FC<{ data: any }> = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const addShortString = data.map((item: any) => {
      return {
        completeOption: item.text,
        option: item.text.length >= 30 ? item.text.substring(0, 30).trimEnd() + '...' : item.text,
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  return (
    <>
      <div className='roulette-container'>
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={0.2}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={'#ccc'}
          outerBorderWidth={9}
          innerBorderColor={'#f2f2f2'}
          radiusLineColor={'tranparent'}
          radiusLineWidth={1}
          textColors={['#f5f5f5']}
          textDistance={55}
          fontSize={10}
          backgroundColors={[
            '#3f297e',
            '#175fa9',
            '#169ed8',
            '#239b63',
            '#64b031',
            '#efe61f',
            '#f7a416',
            '#e6471d',
            '#dc0936',
            '#e5177b',
            '#be1180',
            '#871f7f',
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button
          className='button roulette-button'
          onClick={handleSpinClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: '+9',
            borderRadius: ' 5rem',
            width: '5rem',
            height: '5rem',
            transform: 'translate(-55%, -55%)',
            background: 'white',
            color: ' #000',
            fontSize: ' 0.8rem',
            fontWeight: 'bold',
          }}
        >
          Quay
        </button>
      </div>
      <br />
    </>
  );
};

export default Roulette;
