console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  }).then(() => {
    console.log('Promise 2');
  });
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 3');
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
  return Promise.resolve();
}).then(() => {
  console.log('Promise 4');
});

console.log('End');