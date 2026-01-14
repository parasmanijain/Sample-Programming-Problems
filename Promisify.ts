type NodeCallback<T> = (err: Error | null, result?: T) => void;

function promisifyFn<T, Args extends unknown[]>(
  fn: (...args: [...Args, NodeCallback<T>]) => void
) {
  return (...args: Args): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      fn(...args, (err: Error | null, result?: T) => {
        if (err) reject(err);
        else resolve(result as T);
      });
    });
  };
}

function getUser(id: number, cb: (err: Error | null, user?: string) => void) {
  setTimeout(() => cb(null, `User-${id}`), 500);
}

const getUserAsync = promisifyFn<string, [number]>(getUser);

getUserAsync(1).then(console.log);
