import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import useItem from "../hooks/useItem";
import LoaderComponent from "../LoaderComponent/LoaderComponent";

const ItemDetails = () => {
  const { itemId } = useParams();
  const { product, loading } = useItem("products", itemId);

  return loading ? <LoaderComponent/> : <ItemDetailContainer productData={product} />;
};

export default ItemDetails;
