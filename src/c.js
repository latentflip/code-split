
require.ensure([], function (require) {
  console.log(require('./a') + require('./b'));
});
