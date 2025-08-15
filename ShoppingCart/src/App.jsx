import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQty,
  Decreaseqty,
} from "./Redux/Store.js";
import { useState } from "react";

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Enter product name"
      />
      <button
        onClick={() => {
          if (product.trim()) {
            dispatch(addItem(product));
            setProduct("");
          }
        }}
      >
        Add to Cart
      </button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Qty: {item.qty}
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
            <button onClick={() => dispatch(Decreaseqty(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>❌</button>
          </li>
        ))}
      </ul>
      <h3>Total Items: {cart.reduce((sum, item) => sum + item.qty, 0)}</h3>
    </div>
  );
}

export default App;
