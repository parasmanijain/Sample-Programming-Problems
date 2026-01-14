async function asyncMap<T, R>(
  array: T[],
  fn: (item: T, index: number, array: T[]) => Promise<R>
): Promise<R[]> {
  return Promise.all(array.map(fn));
}

const users = [1, 2, 3];

const result = await asyncMap(users, async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
});

console.log(result);

export {};
