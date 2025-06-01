import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Snackbar = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-pink-100 border border-pink-300 text-pink-800 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce-in z-50">
      <FaCheckCircle className="text-pink-500" />
      <span className="font-medium">{message}</span>
    </div>
  );
};

const AsianSkincareCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const products = [
    // ... your products array (same as before)
  ];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [products.length]);

  const goToSlide = (index) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(index);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 5000);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSnackbarMessage(`${product.name} added to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-light mb-2">ASIAN BEAUTY</h1>
        <h2 className="text-2xl font-light">SKINCARE ESSENTIALS</h2>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-80 md:h-[32rem] bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                  <p className="text-lg font-medium text-rose-700">{product.price}</p>
                  <button
                    className="mt-4 px-6 py-2 bg-pink-600 text-white hover:bg-rose-600 transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-rose-500' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Snackbar */}
      {snackbarMessage && (
        <Snackbar
          message={snackbarMessage}
          onClose={() => setSnackbarMessage('')}
        />
      )}
    </div>
  );
};

export default AsianSkincareCarousel;
