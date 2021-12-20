import { useEffect, useState } from 'react';
import Milkshake1 from '../../assets/milkshake1.jpg';
import Milkshake2 from '../../assets/milkshake2.jpg';
import Milkshake3 from '../../assets/milkshake3.jpg';
import Milkshake4 from '../../assets/milkshake4.jpg';
import Milkshake5 from '../../assets/milkshake5.jpg';
import Button from '../Button';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const milkshakes = [
    Milkshake1,
    Milkshake2,
    Milkshake3,
    Milkshake4,
    Milkshake5,
  ];

  useEffect(() => {
    const allImagesAreLoaded = () => {
      const images = Array.from(document.querySelectorAll('img'));
      return images.every(x => x.complete && x.naturalHeight !== 0);
    };

    const handler = () => {
      setIsLoaded(allImagesAreLoaded());
    };

    if (document.readyState === 'complete') {
      handler();
    } else {
      window.addEventListener('load', handler);
    }

    return () => window.removeEventListener('load', handler);
  }, []);

  return isLoaded ? (
    <div id='hero' className='section'>
      <div className='hero-container'>
        <h1 className='hero-title'>Got Milk?</h1>
        <p className='hero-subtitle'>How about a milkshake instead?</p>
      </div>
      <div className='hero-image-list'>
        {milkshakes.map((url, index) => (
          <img
            key={index}
            className='hero-image'
            src={url}
            alt={`Milkshake${index}`}
          />
        ))}
      </div>
      <Button url='order'>Order now</Button>
    </div>
  ) : (
    <div className='section'>
      <h2>Just one sec. We're loading up some data! 😉</h2>
    </div>
  );
};

export default Hero;
