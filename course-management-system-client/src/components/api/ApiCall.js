export const categoryData = fetch(`http://localhost:3000/api/category`).then(
  (res) => res.json()
);

export const blogsData = fetch(`http://localhost:3000/api/blogs`).then((res) =>
  res.json()
);
