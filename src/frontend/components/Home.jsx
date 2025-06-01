import React from "react";

const Home = () => {
  return (
    <section
id="nav-home"
      className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Decorative Blossoms */}
      <img
        src="https://i.pinimg.com/736x/b0/03/82/b00382304681b291323b014e8272d0aa.jpg"
        alt="Cherry blossom left"
        className="absolute top-[80px] left-0 w-48 md:w-64 opacity-90 pointer-events-none"
        
      />
      <img
        src="https://i.pinimg.com/736x/23/7a/0f/237a0fe81b24376404dc0de7e3fe361d.jpg"
        alt="Cherry blossom right"
        className="absolute top-[80px] right-0 w-48 md:w-64 opacity-90 pointer-events-none"
      />

      {/* Text Content */}
      <div className="text-center max-w-2xl z-10 space-y-6 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug">
          Embrace Natural Beauty with Sakura Skincare
        </h1>
        <p className="text-lg text-gray-600">
          Indulge your skin with the gentle essence of cherry blossoms.
          Our sakura-infused products are designed to hydrate, brighten,
          and rejuvenate—bringing a touch of spring to your daily routine.
        </p>
        <div className="flex justify-center gap-4">
          <button id="shop" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-black">
            Shop Now
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition focus:outline-none focus:ring-2 focus:ring-black">
            Learn More
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Home;
