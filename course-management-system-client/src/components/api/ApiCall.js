export const categoryData = fetch(`http://localhost:3000/api/category`).then(
  (res) => res.json()
);
