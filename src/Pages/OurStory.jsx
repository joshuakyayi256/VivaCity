/* eslint-disable react/no-unescaped-entities */
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import images3 from '../images/images3.jpg';
import image4 from '../images/image4.jpg';

export default function OurStory() {
  return (
    <div className="our-story bg-gray-100 min-h-screen py-12">
      <section className="section">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <img src={image1} alt="Who Are We Image" className="rounded-lg shadow-lg mx-auto max-w-full h-100 lg:w-1/4 lg:order-first" />
          <div className="lg:w-1/2 lg:order-last">
            <h2 className="text-3xl font-semibold mb-8">Who Are We</h2>
            <p className="text-lg leading-relaxed mb-8">
              VivaCity Candles And Bath Salts is a company dedicated to providing high-quality products that promote relaxation and wellness. Our team consists of passionate individuals committed to helping people find peace in their everyday lives.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-8">How We Started</h2>
            <p className="text-lg leading-relaxed mb-8">
              Our journey began with a simple idea - to create products that promote relaxation and well-being. Through dedication and hard work, we've turned that idea into a reality. Today, VivaCity Candles And Bath Salts is known for its high-quality products and commitment to customer satisfaction.
            </p>
          </div>
          <img src={image2} alt="How We Started Image" className="rounded-lg shadow-lg mx-auto max-w-full h-90 lg:w-1/4 lg:order-last" />
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <img src={images3} alt="Sustainable Approach Image" className="rounded-lg shadow-lg mx-auto max-w-full lg:w-1/4 lg:order-first" />
          <div className="lg:w-1/2 lg:order-last">
            <h2 className="text-3xl font-semibold mb-8">Sustainable Approach</h2>
            <p className="text-lg leading-relaxed mb-8">
              At VivaCity Candles And Bath Salts, we are committed to sustainability. We source our materials responsibly and strive to minimize our environmental impact. From our packaging to our production processes, sustainability is at the forefront of everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-8">Our Impact</h2>
            <p className="text-lg leading-relaxed mb-8">
              VivaCity Candles And Bath Salts is more than just a company - we're a movement. With every purchase, you're supporting our mission to promote relaxation and well-being while making a positive impact on the environment. Join us in our journey towards a happier, healthier world.
            </p>
          </div>
          <img src={image4} alt="Our Impact Image" className="rounded-lg shadow-lg mx-auto max-w-full h-100 lg:w-1/4 lg:order-last" />
        </div>
      </section>
    </div>
  );
}
