import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import useItem from "../hooks/useItem";

const ItemDetails = () => {
  const { itemId } = useParams();
  const { product } = useItem("products", itemId);

  return <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
