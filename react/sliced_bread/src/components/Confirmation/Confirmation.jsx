import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Milkshake from '../../assets/milkshake1.jpg';
import Button from '../Button';
import './Confirmation.css';

const Confirmation = () => {
  const order = JSON.parse(window.localStorage.getItem('milkshakeOrder'));
  const { id: confirmationId } = useParams();

  const [milkshakeList, setMilkShakeList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const milkShake = {
      img: Milkshake,
      description: 'Our special milkshake',
      price: 5,
    };
    const milkshakeList = new Array(order.drinkQuantity).fill(milkShake);
    setMilkShakeList(milkshakeList);
    setTotal(milkshakeList.reduce((acc, curr) => acc + curr.price, 0));
  }, [order.drinkQuantity]);

  const getMilkshakesToDisplay = () => {
    return milkshakeList.map((m, i) => (
      <div key={`milkshake_${i}`} className='milkshake-detail'>
        <img
          className='milkshake-detail__image'
          src={m.img}
          alt='Special Milkshake'
        ></img>
        <div className='milkshake-detail__info'>
          <div className='milkshake-info__description'>
            <h3>{m.description}</h3>
            <p className='milkshake_info__description__blurb'>
              Chocolate and vanilla swirl, topped off with caramal and shaved
              premium cocoa.
            </p>
          </div>
          <h5>{`$${m.price.toFixed(2)}`}</h5>
        </div>
      </div>
    ));
  };

  return order ? (
    <div className='order-summary-details section'>
      <h1>Order summary</h1>
      <p className='order-sumary-details__num'>ORDER #{confirmationId}</p>
      <div className='order-sumary-details__list'>
        {getMilkshakesToDisplay()}
        <h4>Your Total: {`$${total.toFixed(2)}`}</h4>
      </div>
      <Button>Go back to store</Button>
    </div>
  ) : (
    <h1>Nothing to see here!</h1>
  );
};

export default Confirmation;
