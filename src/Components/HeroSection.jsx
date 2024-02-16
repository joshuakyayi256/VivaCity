import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-cover bg-center text-white py-24" style={{ backgroundImage: 'url("https://images.pexels.com/photos/146715/pexels-photo-146715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=2000")', backgroundSize: 'cover' }}>
      <div className="container mx-auto px-8">
        <h1 className="text-6xl font-bold mb-8 leading-tight">Discover Our Natural Products</h1>
        <p className="text-2xl mb-12">Handcrafted with care for your well-being!</p>
        <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-xl font-semibold transition duration-300 ease-in-out">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
