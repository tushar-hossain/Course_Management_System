export const categoryData = fetch(
  `https://course-management-system-server-ashen.vercel.app/api/category`
).then((res) => res.json());

export const blogsData = fetch(
  `https://course-management-system-server-ashen.vercel.app/api/blogs`
).then((res) => res.json());
