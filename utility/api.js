import axios from "axios";

const content = ["article", "product"];

export function getProducts() {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/products`);
}

export async function getPopularIdentifiers() {
  return axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/identifiers?start=0&limit=3&content=product&identifier=categories&related=true`)
}

export async function getIdentifiers() {
  const allCategories = await Promise.all(
    content.map(async (item) => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/identifiers?start=0&limit=-1&content=${item}&identifier=categories`
      );
      const categories = await res.data;
      return { [item]: categories };
    })
  );
  return allCategories.reduce((acc, curr) => ({ ...acc, ...curr }), {});
}
