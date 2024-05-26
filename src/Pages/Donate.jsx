import React, { useState, useEffect } from 'react';
import logo from '../assets/LOGO 1.png';
import './donate.css';
import { Link } from 'react-router-dom';
import toprated from '../assets/toprated.png';
import fourStar from '../assets/fourstar.png';
import crypto from '../assets/crypto.jpg';

const Donate = () => {
  const [selectedFrequency, setSelectedFrequency] = useState('One-Time-Gift');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [showDialog2, setShowDialog2] = useState(true); // Set initial state to true
  const [payment, setPayment] = useState("");
  const [showDialog3, setShowDialog3] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: '',
    email: ''
  });

  const handleFrequencyClick = (frequency) => {
    setSelectedFrequency(frequency);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText('whitewolf642784@gmail.com').then(() => {
      window.location.href = 'https://www.paypal.com';
    });
  };

  const handleCopyClick2 = () => {
    navigator.clipboard.writeText('bc1q5n5v5ygpglqrer8ydp8h9v8n05cvncpf5tpfnt').then(() => {});

    // window.location.href = 'https://www.binance.com/';
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when a predefined amount is selected
  };

  const handleDonateClick = () => {
    if (selectedAmount && selectedFrequency && payment) {
      if (payment === "paypal") {
        setShowDialog(true);
      } else if (payment === "crypto") {
        setShowDialog3(true);
      }
    } else {
      alert('Please select an amount, a frequency, and a payment method.');
    }
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      setCustomAmount(value);
      setSelectedAmount(`${value}$`);
    } else if (value === '') {
      setCustomAmount('');
      setSelectedAmount('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    const url = 'https://formspree.io/f/xjvndknd';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setShowDialog2(false); // Update showDialog2 instead of showDialog
      } else {
        alert('Thank You For Your Kindness One More Step');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Thank You For Your Kindness One More Step');
    }
  };

  return (
    <div className='donate'>
      <div className='donateNav'>
        <Link to={"/"}><img src={logo} alt="" /></Link>
        <div>
          <img src={fourStar} alt="" />
          <img src={toprated} alt="" />
        </div>
      </div>
      <div className="bill">
        <div>
          <h1>GIFT FREQUENCY</h1>
        </div>
        <div className='btnss'>
          <div className="btnd">
            <button
              className={`frequency-button ${selectedFrequency === 'One-Time-Gift' ? 'selected' : ''}`}
              onClick={() => handleFrequencyClick('One-Time-Gift')}
            >
              One-Time Gift
            </button>
            <button
              className={`frequency-button ${selectedFrequency === 'Monthly Gifts' ? 'selected' : ''}`}
              onClick={() => handleFrequencyClick('Monthly Gifts')}
            >
              Monthly Gift
            </button>
          </div>

          {selectedFrequency === 'One-Time-Gift' && (
            <h1>A monthly gift does even more to help Israel's brave soldiers.</h1>
          )}
        </div>
        <div className='billing'>
          {['50$', '100$', '250$', '500$', '1000$', '2000$'].map((amount) => (
            <button
              key={amount}
              className={`billing-button ${selectedAmount === amount ? 'selected' : ''}`}
              onClick={() => handleAmountClick(amount)}
            >
              {amount}
            </button>
          ))}
          <input
            type="text"
            placeholder='Other Amounts'
            value={customAmount}
            onChange={handleCustomAmountChange}
          />
        </div>
        <div className='payment-method'>
          <label>Payment Method</label>
          <select value={payment} onChange={(e) => setPayment(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">BTC</option>
          </select>
        </div>
        <button type='button' onClick={handleDonateClick} className='donatebtn'>Donate Now</button>
        {showDialog2 && (
          <div className='dialog'>
            <form onSubmit={handleSubmit}>
              <h2>BILLING INFORMATION</h2>
              <label className="title">Title</label>
              <select id="title" name="title" onChange={(e) => setFormData({ ...formData, title: e.target.value })}>
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
              </select>
              <label className="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
              <label className="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
              <label className="address">Apt/Box/Unit/Suite</label>
              <input type="text" id="address" name="address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
              <label className="city">City</label>
              <input type="text" id="city" name="city" required onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
              <label className="state">State/Province</label>
              <input type="text" id="state" name="state" required onChange={(e) => setFormData({ ...formData, state: e.target.value })} />
              <label className="zip">Zip/Postal Code</label>
              <input type="text" id="zip" name="zip" required onChange={(e) => setFormData({ ...formData, zip: e.target.value })} />
              <label className="country">Country</label>
              <input type="text" id="country" name="country" required onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
              <label className="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <label className="email">Email Address</label>
              <input type="email" id="email" name="email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              <button type='submit'>Submit</button>
              <button type='button' onClick={() => { setShowDialog2(false) }} className='next'>Skip</button>
            </form>
          </div>
        )}
        <br /><br />
      </div>

      {showDialog && (
        <div className='dialog'>
          <div className='dialog-content'>
            <p>
              Thank you for your generous donation of {selectedAmount} as a {selectedFrequency.replace('-', ' ')} to support the IDF. Please send your payment to the PayPal account below;
              <br /><br />
              <p className='P'>whitewolf642784@gmail.com</p> <br />
              <p className='P2'>NOTICE!!<br />Send as (friends and family)</p>

            </p>
            <button onClick={handleCopyClick}>Copy</button>
          </div>
        </div>
      )}

      {showDialog3 && (
        <div className='dialog'>
          <div className='dialog-content'>
            <p>
              Thank you for your generous donation of {selectedAmount} as a {selectedFrequency.replace('-', ' ')} to support the IDF. Please send your payment to the BTC wallet address below;
              <br /><br />

              <img src={crypto} alt=""  className='crypto' />
              <p className='P'>bc1q5n5v5ygpglqrer8ydp8h9v8n05cvncpf5tpfnt</p> <br />
              <p className='P2'>NOTICE!!<br />Send in (BTC) not USDT</p>
            </p>
            <button onClick={handleCopyClick2}>Copy Wallet Adress</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
