type AwaitedValue<T> = T extends Promise<infer U> ? U : never;

async function mergePromisesTuple<
  T extends readonly Promise<any>[],
  R = AwaitedValue<T[number]>
>(
  promises: T,
  mergeFn: (acc: R, value: AwaitedValue<T[number]>) => R,
  initialValue: R
): Promise<R> {
  const values_1 = await Promise.all(promises);
  return values_1.reduce(mergeFn, initialValue);
}

const promises = [
  Promise.resolve({ a: 1 }),
  Promise.resolve({ b: 2 }),
  Promise.resolve({ c: 3 }),
] as const;

mergePromisesTuple(promises, (acc, val) => ({ ...acc, ...val }), {}).then(
  console.log
);
