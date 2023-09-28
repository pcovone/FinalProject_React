import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { doc } from "firebase/firestore";

// eslint-disable-next-line react/prop-types
const ItemDetailContainer = ({ productData }) => {
  const product = productData;
  const [stock, setStock] = useState(0);

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="detail-product">
      <div className="product" key={product.id}>
        <img src={product.url} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>{product.description}</p>
        <ItemCount />
        <button className="buy-button">Comprar Ahora</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
