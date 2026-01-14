async function asyncMapSequential<T, R>(
  array: T[],
  fn: (item: T, index: number, array: T[]) => Promise<R>
): Promise<R[]> {
  const result: R[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(await fn(array[i], i, array));
  }

  return result;
}

const users = [1, 2, 3];

const result = await asyncMapSequential(users, async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json();
});

console.log(result);

export {};
