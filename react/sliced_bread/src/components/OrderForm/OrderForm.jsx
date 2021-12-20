import { useState, Fragment } from 'react';
import { getRandomSeinfeldCharacter, getRandomNumber } from '../../utils';
import Button from '../Button';
import './OrderForm.css';

const OrderForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    drinkQuantity: '',
    city: '',
    province: '',
    country: '',
  });
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [errorFields, setErrorFields] = useState([]);

  const formInputs = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First name (optional)',
      value: formState.firstName,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last name (optional)',
      value: formState.lastName,
    },
    {
      type: 'number',
      name: 'drinkQuantity',
      label: 'Quantity (optional)',
      value: formState.drinkQuantity,
    },
    {
      type: 'text',
      name: 'city',
      label: 'City (required)',
      value: formState.city,
    },
    {
      type: 'text',
      name: 'province',
      label: 'Province (required)',
      value: formState.province,
    },
    {
      type: 'text',
      name: 'country',
      label: 'Country (required)',
      value: formState.country,
    },
  ];

  const onChange = (key, value) => {
    if (key === 'drinkQuantity') {
      const parsedValue = parseInt(value, 10);
      value = parsedValue < 0 ? 0 : parsedValue;
    }
    setFormState(prevState => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const validateRequiredFields = () => {
    const { city, province, country } = formState;
    let errors = [];
    const createErrorMessage = key =>
      errors.push({ key, error: `You must provide a valid ${key}.` });

    if (!city) {
      createErrorMessage('city');
    }
    if (!province) {
      createErrorMessage('province');
    }
    if (!country) {
      createErrorMessage('country');
    }

    if (errors.length) {
      setErrorFields(errors);
      return false;
    }

    setErrorFields([]);
    return true;
  };

  const onSubmit = e => {
    e.preventDefault();
    const fieldsRequiredAreValid = validateRequiredFields();
    if (fieldsRequiredAreValid) {
      let newState = {};
      if (!formState.firstName && !formState.lastName) {
        const [firstName, lastName] = getRandomSeinfeldCharacter();
        newState = { ...newState, firstName, lastName };
      }
      if (formState.drinkQuantity === 0) {
        newState = { ...newState, drinkQuantity: getRandomNumber(10) };
      }
      setFormState(prevState => {
        return {
          ...prevState,
          ...newState,
        };
      });
      setOrderCompleted(true);
      window.localStorage.setItem('milkshakeOrder', JSON.stringify(formState));
    }
  };

  const getRandomOrderConfirmationNum = () => `MILK${getRandomNumber(1000000)}`;

  const renderInputFields = () => {
    return (
      formInputs.length &&
      formInputs.map((input, index) => {
        const errorField = errorFields.find(e => e.key === input.name);
        if (errorField) {
          return (
            <Fragment key={`${index}_${input.name}`}>
              <input
                id={input.name}
                type={input.type}
                name={input.name}
                placeholder={input.label}
                value={input.value}
                onChange={e => onChange(input.name, e.target.value)}
              />
              <label className='error-label' htmlFor={input.name}>
                {errorField.error}
              </label>
            </Fragment>
          );
        }
        return (
          <input
            key={`${index}_${input.name}`}
            id={input.name}
            type={input.type}
            name={input.name}
            placeholder={input.label}
            value={input.value}
            onChange={e => onChange(input.name, e.target.value)}
          />
        );
      })
    );
  };

  const renderOrderForm = (
    <>
      <h1 className='title'>Order up some frosty milkshakes!</h1>
      <form className='order-form' onSubmit={onSubmit}>
        {renderInputFields()}
        <button className='order-form-button' type='submit'>
          Grab and pay later
        </button>
      </form>
    </>
  );

  const renderConfirmationSection = () => {
    const confirmationNum = getRandomOrderConfirmationNum();
    return (
      <>
        <h1 className='title'>🎉 Your order is confirmed! 🎉</h1>
        <div className='order-summary'>
          <p className='order-sumary-details__num'>ORDER #{confirmationNum}</p>
          <p className='order-summary-brief'>
            Hi {formState.firstName}! We're getting your milkshake order
            prepared for you! We'll notify you when it's ready! We hope you love
            each slurp with as much as love as we had making it.
            <br />
            <br />
            Best, the Milkshake team.
          </p>
          <Button url={`/confirmation/${confirmationNum}`}>
            View your order
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className='section' id='order'>
      {orderCompleted ? renderConfirmationSection() : renderOrderForm}
    </div>
  );
};

export default OrderForm;
