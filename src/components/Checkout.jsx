import React, { useState } from 'react';
import cardpic from "../images/card_img.png"

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="bg-gray-100 p-4 mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ border: '1px solid black' }}
            className="w-full p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ border: '1px solid black' }}
            className="w-full p-2 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium">Card Number</label>
                <img className='mt-4 mb-4' src={cardpic} alt=""/>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            style={{ border: '1px solid black' }}
            className="w-full p-2 rounded-md"
            required
          />
        </div>
        <div className="mb-4 flex justify-between">
          <div>
            <label className="block text-gray-600 font-medium">Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className="w-20 p-2 border rounded-md"
              style={{ border: '1px solid black' }}
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="w-20 p-2 border rounded-md"
              style={{ border: '1px solid black' }}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className='mt-5 p-3 rounded-xl bg-black text-white text-sm hover:bg-zinc-700 mb-3  lg:mb-0 lg:text-base'
        >
          Submit
        </button>

        {/* /////////////////////////////////////////////////////////////// */}
        
        <button
          type="submit"
          className='mt-5 ml-10 p-3 rounded-xl bg-red-500 text-white text-sm hover:bg-red-600 mb-3  lg:mb-0 lg:text-base'
          onClick={props.setingCheckout}
        >
          Go Back
        </button>
      </form>
    </div>
  );
};

export default Checkout;
