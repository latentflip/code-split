
require.ensure(['./a', './b'], function (require) {
  console.log(require('./a') + require('./b'));
});
