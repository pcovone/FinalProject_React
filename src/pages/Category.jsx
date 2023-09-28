import { useParams } from "react-router-dom";
import useCollection from "../hooks/useCollection";
import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { useEffect, useState } from "react";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  const { categoryName } = useParams();
  const { products, loading } = useCollection("products");

  useEffect(() => {
    const productsFiltered = products.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [products, categoryName]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <>
      <Header title={categoryName} />
      <ItemListContainer productsData={productsFiltered} />
    </>
  );
};

export default Category;
