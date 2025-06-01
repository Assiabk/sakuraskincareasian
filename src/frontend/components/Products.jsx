import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Snackbar = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // auto-hide after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-pink-100 border border-pink-300 text-pink-800 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce-in z-50">
      <FaCheckCircle className="text-pink-500" />
      <span className="font-medium">{message}</span>
    </div>
  );
};

const ProductGrid = () => {
  const [sortOrder, setSortOrder] = useState('default');
  const [cart, setCart] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Aixin Rose Repair Set',
      description: 'Whitening and firming set with rose essential oil and vitamin C',
      price: 14000,
      image: 'https://sc04.alicdn.com/kf/H477c2887d1444dfa8eb2221f95675b97j.jpg',
    },
    {
      id: 2,
      name: 'Aromatica Reviving Rose Toner',
      description: 'Organic toner with damask rose for a dewy, glowing complexion',
      price: 11200,
      image: 'https://i.pinimg.com/736x/7f/69/9f/7f699f129f3237838a875961486b9c5f.jpg',
    },
    {
      id: 3,
      name: 'Mamonde Rose Water Gel Cream',
      description: 'Cooling hydration with 68.7% rose water for sensitive skin',
      price: 10000,
      image: 'https://i.pinimg.com/736x/61/49/a7/6149a7bd73c20103817faf1bde2fd568.jpg',
    },
    {
      id: 4,
      name: 'Missha Damask Rose Sheet Mask',
      description: 'Soothing sheet mask enriched with rose extracts for skin vitality',
      price: 1500,
      image: 'https://i.pinimg.com/736x/51/5f/88/515f88b4002c791e7d4d338dd90dc865.jpg',
    },
    {
      id: 5,
      name: 'Innisfree Jeju Cherry Blossom Cream',
      description: 'Radiance-boosting gel cream with cherry blossom extract',
      price: 9800,
      image: 'https://i.pinimg.com/736x/0d/29/a7/0d29a7beb6ef763565a55c908a1d0f5e.jpg',
    }
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setSnackbarMessage(`${product.name} added to cart!`);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low') return a.price - b.price;
    if (sortOrder === 'high') return b.price - a.price;
    return 0;
  });

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div id="shop" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-light text-gray-800">All Skincare Products</h2>
        <select
          className="px-4 py-2 rounded-md bg-white border border-rose-300 text-rose-600 font-medium shadow-sm hover:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div
              onClick={() => handleViewDetails(product.id)}
              className="cursor-pointer h-64 bg-gray-100 flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-full w-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="mt-2 text-rose-700 font-bold">{product.price.toLocaleString()} DZD</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {snackbarMessage && (
        <Snackbar message={snackbarMessage} onClose={() => setSnackbarMessage('')} />
      )}
    </div>
  );
};

export default ProductGrid;
