import { useState, useEffect } from 'react';

const useFetchCategories = (content) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const allCategories = await Promise.all(
        content.map(async (item) => {
          const res = await fetch(
            `http://localhost:5000/api/identifiers?start=0&limit=-1&content=${item}&identifier=categories`
          );
          const categories = await res.json();
          return { [item]: categories };
        })
      );
      setCategories(
        allCategories.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      );
    };
    fetchData();
  }, []);

  return categories;
};

export default useFetchCategories;