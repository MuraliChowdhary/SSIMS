import { useCart } from './CardContext'; // Import useCart
import { Navbar } from "./Navbar";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart items from context

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold text-center mt-5 mb-14'>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className='text-lg text-gray-600'>Your cart is empty.</p>
        ) : (
          <ul className='w-full max-w-2xl'>
            {cartItems.map((item) => (
              <li key={item._id} className='bg-white shadow-lg rounded-lg mb-4 p-4 flex items-center'>
                <img src={item.imageUrl} alt={item.name} width={150} height={150} className='rounded-lg'/>
                <div className='flex flex-col ml-4 flex-grow'>
                  <div className='text-lg font-semibold'>{item.name}</div>
                  <div className='text-gray-700'>Price: ₹{item.price}</div>
                  <button 
                    className="mt-2 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                    onClick={() => removeFromCart(item._id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
