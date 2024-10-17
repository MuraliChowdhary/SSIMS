import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useCart } from './CardContext'; // Import Cart context

export const ProductsCard = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State to track if item is added
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Use addToCart function from CartContext

  useEffect(() => {
    async function fetchItem() {
      const item = await axios.get(`http://localhost:3002/api/v1/customer/getItem`, {
        params: { id: id },
      });
      if (!item.data.success) {
        console.log(item.data.message);
      }
      setProducts(item.data.product);
    }
    fetchItem();
  }, [id]);

  const finalPrice = useMemo(() => {
    if (!products || !products.discountInformation) return 0;

    const { price, discountInformation } = products;
    const { discountValue, discountType } = discountInformation;

    let calculatedPrice = price;

    if (discountType === 'percentage') {
      calculatedPrice -= (discountValue / 100) * price;
    } else if (discountType === 'fixed') {
      calculatedPrice -= discountValue;
    }

    return calculatedPrice;
  }, [products]);

  const handleAddToCart = () => {
    addToCart(products); 
    setIsAddedToCart(true);  
  };

  const handleGoToCart = () => {
    navigate('/cart'); 
  };

  return (
    <div>
      <Navbar />
      <div className="relative flex flex-row justify-between items-center px-10">
        <div className="flex">
          <img
            src={products.imageUrl}
            alt={products.name}
            width={400}
            height={400}
            className="mt-24 ml-28"
          />

          <div className="flex flex-col cursor-pointer">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mt-32"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mt-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 mt-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <div className="text-center flex-grow">
          <h1 className="text-3xl font-bold">{products.name}</h1>
          <h3 className="text-lg mt-4 font-semibold">{products.description}</h3>

          <div className="flex flex-col mt-10">
            <div className="mb-4 text-lg font-semibold">About:</div>

            <ul className="list-disc list-inside text-lg text-gray-500">
              <li className="mb-2">
                <span className="text-lg font-semibold text-black">Description:</span>{' '}
                {products.description}
              </li>

              <li className="mb-2">
                <span className="text-lg font-semibold text-black">Brand:</span>{' '}
                {products.brand}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <div className="text-green-700 font-semibold mb-10 mr-4">
              Now ₹{finalPrice.toFixed(2)}
            </div>
            <div className="line-through mr-2">₹{products.price}</div>
          </div>
          {isAddedToCart ? (  
            <button
              onClick={handleGoToCart}  
              className="border p-2 rounded bg-green-500 text-white hover:bg-green-600 transition duration-200"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}  
              className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
