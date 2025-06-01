import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar",
  "Blida", "Bouira", "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Algiers",
  "Djelfa", "Jijel", "Sétif", "Saïda", "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma",
  "Constantine", "Médéa", "Mostaganem", "M’Sila", "Mascara", "Ouargla", "Oran", "El Bayadh",
  "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt",
  "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
  "Ghardaïa", "Relizane"
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    wilaya: '',
    address: ''
  });

  const handleOrder = () => {
    if (!formData.name || !formData.phone || !formData.wilaya || !formData.address || quantity < 1) {
      alert("Please fill in all fields and a valid quantity.");
      return;
    }

    console.log("Order submitted:", {
      productId: product.id,
      name: product.name,
      quantity,
      total: product.price * quantity,
      customer: formData
    });

    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      navigate('/');
    }, 3000);
  };

  if (!product) return <div className="p-8 text-red-600">Product not found!</div>;

  return (
    <div className="pt-24 pb-10 min-h-screen flex flex-col justify-between bg-white">
      {/* Product Display */}
      <div className="flex flex-col md:flex-row items-center justify-center px-8 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />

        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold text-rose-600 mb-2">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-gray-800 mb-6">
            {product.price.toLocaleString()} DZD
          </p>

          {/* Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block mb-2 font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-24 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
          </div>

          {/* Order Form */}
          <div className="space-y-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <select
              value={formData.wilaya}
              onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white"
            >
              <option value="">Select your Wilaya</option>
              {wilayas.map((wilaya) => (
                <option key={wilaya} value={wilaya}>{wilaya}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Street address, building, etc."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Order Button */}
          <button
            onClick={handleOrder}
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded transition"
          >
            Place Order
          </button>

          {/* Confirmation */}
          {orderSubmitted && (
            <p className="mt-4 text-pink-600 font-semibold">
              🌸 Your pink sakura order was placed successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
