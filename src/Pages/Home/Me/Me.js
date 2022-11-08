import React from 'react';

const Me = () => {
    return (
        <div className="hero my-2 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt='' src="https://i.ibb.co/YTcmDdL/slider-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">30% discount</h1>
            <p className="py-6">If you will order now you will get 30 percent discount in every dish you want to order.The discount offer will give a limited time.So what are you waiting for.Place your order.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Me;