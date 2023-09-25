import Header from "../components/Header/Header";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import useCollection from "../hooks/useCollection";

const Home = () => {
  const { products } = useCollection("products");

  return (
    <>
      <Header
        title="Green Tech Revolution"
        title2="Exploring Sustainable Innovations of the Future."
      />
      <ItemListContainer productsData={products} />
    </>
  );
};

export default Home;
