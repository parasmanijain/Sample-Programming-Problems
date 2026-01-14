async function mapAsyncLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      results[currentIndex] = await fn(items[currentIndex], currentIndex);
    }
  }

  // Create worker pool
  const workers = Array.from({ length: Math.min(limit, items.length) }, () =>
    worker()
  );

  await Promise.all(workers);
  return results;
}

const ids = [1, 2, 3, 4, 5, 6];

const result = await mapAsyncLimit(ids, 2, async (id) => {
  console.log("Processing", id);
  await new Promise((r) => setTimeout(r, 1000));
  return id * 10;
});

console.log(result);

export {};
