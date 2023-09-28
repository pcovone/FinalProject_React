import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const useCollection = (collectionName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const productsCollection = collection(db, collectionName);
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err)).finally(()=> setLoading(false))
  }, [collectionName]);

  return { products, loading };
};

export default useCollection;
