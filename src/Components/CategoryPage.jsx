// src/Root/CategoryPage/CategoryPage.jsx
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../lib/firebase/firebase";
import { UserContext } from "../Context/User/UserContext";

const CategoryPage = () => {
  const { id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      if (currentUser) {
        const categoryDocRef = doc(
          db,
          "users",
          currentUser.uid,
          "categories",
          id
        );
        const categoryDoc = await getDoc(categoryDocRef);

        if (categoryDoc.exists()) {
          setCategory(categoryDoc.data());
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id, currentUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <h2 className="text-4xl">{category.name}</h2>
    </div>
  );
};

export default CategoryPage;
