import React from 'react';

const Carousel = () => {
    return (

        <div className="carousel w-full py-10 ml-48">
  <div id="slide1" className="carousel-item relative w-full">
    <div>
    <img alt='' src="https://i.ibb.co/6cMPkDn/chef.png" className="w-full" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-36">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div>
    <img alt='' src="https://i.ibb.co/YTcmDdL/slider-1.jpg" className="w-full" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-36">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div>
    <img alt='' src="https://i.ibb.co/8YQFfMg/slider-2.jpg" className="w-full" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-36">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
    //   <div className='grid place-content-center'>
    //     <img src="https://i.ibb.co/6cMPkDn/chef.png" alt="" srcset="" />
    //   </div>

    );
};

export default Carousel;