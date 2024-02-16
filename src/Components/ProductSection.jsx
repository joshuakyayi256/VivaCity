// eslint-disable-next-line no-unused-vars
import React from 'react';
import CylinderCandleImage from '../images/Cylinder-candle.jpg';


const ProductSection = () => {
  const products = [
    { id: 1, name: 'Merry Christmas', price: 'Ugx 30,000', image: CylinderCandleImage },
    { id: 2, name: 'Candy Cane', price: 'Ugx 15,000', image: CylinderCandleImage },
    { id: 3, name: 'Mosquito Repellant', price: 'Ugx 20,000', image: CylinderCandleImage },
    { id: 4, name: 'Cherry Blossom', price: 'Ugx 25,000', image: CylinderCandleImage },
  ];

  return (
    <section className="container mx-auto py-16">
      <h2 className="font-bold text-center text-4xl  mb-8">Our Products</h2>
      <div className="grid grid-cols-4 gap-8 justify-center lg:px-16">
        {products.map(product => (
          <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">Price: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded">
          See more
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
