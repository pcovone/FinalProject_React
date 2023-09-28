import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const useItem = (collectionName, itemId) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, collectionName, itemId);

    getDoc(productItem)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading };
};

export default useItem;
